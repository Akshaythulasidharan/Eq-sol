from keras.models import model_from_json
import cv2
import numpy as np
from PIL import Image 
import requests
import base64
from io import StringIO 

def data_uri_to_cv2_img(uri):
    # print(uri)
    encoded_data = str(uri).split(',')[1]
    nparr = np.fromstring(base64.b64decode(encoded_data), np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    return img

    # image contains the image in base64 format
def model(image): 
   
   
    # Image.open(image).save('input.png')
    # load json and create model
    json_file = open('model.json', 'r')
    loaded_model_json = json_file.read()
    json_file.close()
    loaded_model = model_from_json(loaded_model_json)
    # load weights into new model
    loaded_model.load_weights("model.h5")
    
    img_enc = data_uri_to_cv2_img(image)
    img = cv2.cvtColor(img_enc,cv2.COLOR_BGR2GRAY)

    # img = cv2.imread('te.png',cv2.IMREAD_GRAYSCALE)
    #kernel = np.ones((3,3),np.uint8)
    # cv2.imshow("w",img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
    #erosion = cv2.erode(img,kernel,iterations = 3)
    #dilation = cv2.dilate(img,kernel,iterations = 1)
    #img=dilation
    if img is not None:
        #images.append(img)
        img=~img
        ret,thresh=cv2.threshold(img,127,255,cv2.THRESH_BINARY)
        ctrs,ret=cv2.findContours(thresh,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)
        cnt=sorted(ctrs, key=lambda ctr: cv2.boundingRect(ctr)[0])
        w=int(28)
        h=int(28)
        train_data=[]
        #print(len(cnt))
        rects=[]
        for c in cnt :
            x,y,w,h= cv2.boundingRect(c)
            rect=[x,y,w,h]
            rects.append(rect)
        #print(rects)
        bool_rect=[]
        for r in rects:
            l=[]
            for rec in rects:
                flag=0
                if rec!=r:
                    if r[0]<(rec[0]+rec[2]+10) and rec[0]<(r[0]+r[2]+10) and r[1]<(rec[1]+rec[3]+20) and rec[1]<(r[1]+r[3]+20):
                        flag=1
                    l.append(flag)
                if rec==r:
                    l.append(0)
            bool_rect.append(l)
        #print(bool_rect)
        dump_rect=[]
        for i in range(0,len(cnt)):
            for j in range(0,len(cnt)):
                if bool_rect[i][j]==1:
                    area1=rects[i][2]*rects[i][3]
                    area2=rects[j][2]*rects[j][3]
                    if(area1==min(area1,area2)):
                        dump_rect.append(rects[i])
        #print(len(dump_rect)) 
        final_rect=[i for i in rects if i not in dump_rect]
        #print(final_rect)
        for r in final_rect:
            x=r[0]
            y=r[1]
            w=r[2]
            h=r[3]
            im_crop =thresh[y:y+h+10,x:x+w+10]
            

            im_resize = cv2.resize(im_crop,(28,28))
            # cv2.imshow("work",im_resize)
            cv2.waitKey(0)
            cv2.destroyAllWindows()

            im_resize=np.reshape(im_resize,(1,28,28))
            train_data.append(im_resize)\

    s=""
    for i in range(len(train_data)):
        train_data[i]=np.array(train_data[i])
        train_data[i]=train_data[i].reshape(1,28,28,1)
        result=loaded_model.predict_classes(train_data[i])
        if(result[0]==10):
            s=s+"-"
        if(result[0]==11):
            s=s+"+"
        if(result[0]==0):
            s=s+"0"
        if(result[0]==1):
            s=s+"1"
        if(result[0]==2):
            s=s+"2"
        if(result[0]==3):
            s=s+"3"
        if(result[0]==4):
            s=s+"4"
        if(result[0]==5):
            s=s+"5"
        if(result[0]==6):
            s=s+"6"
        if(result[0]==7):
            s=s+"7"
        if(result[0]==8):
            s=s+"8"
        if(result[0]==9):
            s=s+"9"
        if(result[0]==12):
            s=s+"*"
        if(result[0]==13):
            s=s+"a"
        if(result[0]==14):
            s=s+"alpha"
        if(result[0]==15):
            s=s+"b"
        if(result[0]==16):
            s=s+"beta"
        if(result[0]==17):
            s=s+"c"
        if(result[0]==18):
            s=s+"d"
        if(result[0]==19):
            s=s+"e"
        if(result[0]==20):
            s=s+"f"
        if(result[0]==21):
            s=s+"g"
        if(result[0]==22):
            s=s+"h"
        if(result[0]==23):
            s=s+"i"
        if(result[0]==24):
            s=s+"infinity"
        if(result[0]==25):
            s=s+"j"
        if(result[0]==26):
            s=s+"k"
        if(result[0]==27):
            s=s+"l"
        if(result[0]==28):
            s=s+"m"
        if(result[0]==29):
            s=s+"n"
        if(result[0]==30):
            s=s+"p"
        if(result[0]==31):
            s=s+"pi"
        if(result[0]==32):
            s=s+"q"
        if(result[0]==33):
            s=s+"r"
        if(result[0]==34):
            s=s+"s"
        if(result[0]==35):
            s=s+"t"
        if(result[0]==36):
            s=s+"theta"
        if(result[0]==37):
            s=s+"u"
        if(result[0]==38):
            s=s+"v"
        if(result[0]==39):
            s=s+"x"
        if(result[0]==40):
            s=s+"y"
        if(result[0]==41):
            s=s+"z"
        if(result[0]==42):
            s=s+"("
        if(result[0]==43):
            s=s+")"
        if(result[0]==44):
            s=s+"="
    # print("The entered equation is", s)  

    # print("The Answer is:", eval(s))      

    return { 'id': 1,
        'Eqn':s,
       'TypeEqn':'Connected to backend',
       'EqnAns':eval(s),
       'image': image
       }