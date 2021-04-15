# importing opencv
import cv2 as cv 

# reading the image and storing it into the variable
img = cv.imread('equation2.png')

# using the canny function to detect edges
canny = cv.Canny(img, 125, 175)

# this function is used to convert the image based on pixels values wherein pixels whose intensity is below 125 is BLACK and above 125 is WHITE
ret, thres = cv.threshold(canny, 125, 255, cv.THRESH_BINARY)

# displaying the contours of the image
cv.imshow('Image', thres)

# finding all the countours of the image and storing it in countours
contours, hierarchy = cv.findContours(thres, cv.RETR_LIST, cv.CHAIN_APPROX_NONE)

# displaying the image window until any key is pressed
cv.waitKey(0)