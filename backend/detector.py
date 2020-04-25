##
# Code to detect lakes from Google Maps Images
# By Lachlan Miller
# github.com/lmiller1990

# Reference:
# https://www.pyimagesearch.com/2014/10/20/finding-shapes-images-using-python-opencv/
##

import cv2 as cv
import numpy as np
import sys, getopt

Blue = 0
Green = 0
Red = 0
ImagePath = ''

def main(argv):
   try:
      opts, args = getopt.getopt(argv,"hb:r:g:i:",["blue=","green=","red=","image="])
   except getopt.GetoptError:
      print ('test.py -b <blue value> -g <green value> -r <red value> -i <image path>')
      sys.exit(2)
   for opt, arg in opts:
      if opt == '-h':
         print ('test.py -b <blue value> -g <green value> -r <red value> -i <image path>')
         sys.exit()
      elif opt in ("-b", "--blue"):
         Blue = arg
      elif opt in ("-g", "--green"):
         Green = arg
      elif opt in ("-r", "--red"):
         Red = arg
      elif opt in ("-i", "--image"):
         ImagePath = arg

# Color of a lake [blue green red]
BGR = np.array([Blue, Green, Red])
upper = BGR + 60
lower = BGR - 70

# Read an image from disk
# @param {path} the path of the image to read
# @returns {image} the image
def read_image(path):
    return cv.imread(path)

# applies a threshold to an image based on two boundaries
# @param {image} the image to threshold
# @param {Array[int, int, int]} lower threshold in BGR
# @param {Array[int, int, int]} upper threshold in BGR
def find_mask(image):
    return cv.inRange(image, lower, upper)

def find_contours(mask):
    (cnts, hierarchy) = cv.findContours(
        mask.copy(), cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE)

    print("Found %d black shapes" % (len(cnts)))
    return cnts

# draw contours on an image
# @param {list[[int, int]]} an array of [int, int] points to draw
# @param {image} the image to draw the points on
def show_contours(contours, image):
    cv.drawContours(image, contours, -1, (0, 0, 255), 2)
    cv.imshow("contours", image)


def get_main_contour(contours):
    copy = contours.copy()
    copy.sort(key=len, reverse=True)
    return copy[0]


if __name__ == "__main__":
    main(sys.argv[1:])
    image = read_image(ImagePath)
    mask = find_mask(image)

    contours = find_contours(mask)
    main_contour = get_main_contour(contours)
    show_contours([main_contour], image)

    c = max(contours, key=cv.contourArea)  # max contour
    f = open('path.svg', 'w+')
    f.write('<svg width="' + str(1000) + '" height="' +
            str(750) + '" xmlns="http://www.w3.org/2000/svg">')
    f.write('<polygon points="')

    out = " "
    for i in range(len(c)):
        x, y = c[i][0]
        out += str(x)+","+str(y)+" "
        f.write(str(x) + ',' + str(y) + ' ')

    f.write('"/>')
    f.write('</svg>')
    f.close()

    print(main_contour)
    key = cv.waitKey(0)
    print(out)
