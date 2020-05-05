import cv2 as cv
import numpy as np
import sys

if __name__ == "__main__":
    Blue = sys.argv[1]
    Green = sys.argv[2]
    Red = sys.argv[3]
    ImagePath = sys.argv[4]

    BGR = np.array([int(Blue), int(Green), int(Red)])
    upper = BGR + 60
    lower = BGR - 70

    def read_image(path):
        return cv.imread(path)

    def find_mask(image):
        return cv.inRange(image, lower, upper)


    def find_contours(mask):
        (cnts, hierarchy) = cv.findContours(
            mask.copy(), cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE)
        return cnts

    def show_contours(contours, image):
        cv.drawContours(image, contours, -1, (0, 0, 255), 2)
        cv.imshow("contours", image)

    def get_main_contour(contours):
        copy = contours.copy()
        copy.sort(key=len, reverse=True)
        return copy[0]

    image = read_image(ImagePath)
    mask = find_mask(image)

    contours = find_contours(mask)
    main_contour = get_main_contour(contours)

    c = max(contours, key=cv.contourArea) 
    f = open('path.svg', 'w+')
    f.write('<svg width="' + str(1000) + '" height="' +
            str(750) + '" xmlns="http://www.w3.org/2000/svg">')
    f.write('<polygon points="')

    out = " "
    for i in range(len(c)):
        x, y = c[i][0]
        out += str(x) + "," + str(y) + " "
        f.write(str(x) + ',' + str(y) + ' ')

    f.write('"/>')
    f.write('</svg>')
    f.close()

    print(out)
    key = cv.waitKey(0)
