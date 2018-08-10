"use strict";
var anims=[];
var line = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34, 35, 35, 36, 36, 37, 37, 38, 38, 39, 39, 40, 40, 41, 41, 42, 42, 43, 43, 44, 44, 45, 45, 46, 46, 47, 47, 48, 48, 49, 49, 50, 50, 51, 51, 52, 52, 53, 53, 54, 54, 55, 55, 56, 56, 57, 57, 58, 58, 59, 59, 60, 60, 61, 61, 62, 62, 63, 63, 64, 64, 65, 65, 66, 66, 67, 67, 68, 68, 69, 69, 70, 70, 71, 71, 72, 72, 73, 73, 74, 74, 75, 75, 76, 76, 77, 77, 78, 78, 79, 79, 80, 80, 81, 81, 82, 82, 83, 83, 84, 84, 85, 85, 86, 86, 87, 87, 88, 88, 89, 89, 90, 90, 91, 91, 92, 92, 93, 93, 94, 94, 95, 95, 96, 96, 97, 97, 98, 98, 99, 99, 100, 100, 101, 101, 102, 102, 103, 103, 104, 104, 105, 105, 106, 106, 107, 107, 108, 108, 109, 109, 110, 110, 111, 111, 112, 112, 113, 113, 114, 114, 115, 115, 116, 116, 117, 117, 118, 118, 119, 119, 120, 120, 121, 121, 122, 122, 123, 123, 124, 124, 125, 125, 126, 126, 127, 127, 128, 128, 129, 129, 130, 130, 131, 131, 132, 132, 133, 133, 134, 134, 135, 135, 136, 136, 137, 137, 138, 138, 139, 139, 140, 140, 141, 141, 142, 142, 143, 143, 144, 144, 145, 145, 146, 146, 147, 147, 148, 148, 149, 149, 150, 150, 151, 151, 152, 152, 153, 153, 154, 154, 155, 155, 156, 156, 157, 157, 158, 158, 159, 159, 160, 160, 161, 161, 162, 162, 163, 163, 164, 164, 165, 165, 166, 166, 167, 167, 168, 168, 169, 169, 170, 170, 171, 171, 172, 172, 173, 173, 174, 174, 175, 175, 176, 176, 177, 177, 178, 178, 179, 179, 180, 180, 181, 181, 182, 182, 183, 183, 184, 184, 185, 185, 186, 186, 187, 187, 188, 188, 189, 189, 190, 190, 191, 191, 192, 192, 193, 193, 194, 194, 195, 195, 196, 196, 197, 197, 198, 198, 199, 199];
var lineinf = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34, 35, 35, 36, 36, 37, 37, 38, 38, 39, 39, 40, 40, 41, 41, 42, 42, 43, 43, 44, 44, 45, 45, 46, 46, 47, 47, 48, 48, 49, 49, 50, 50, 51, 51, 52, 52, 53, 53, 54, 54, 55, 55, 56, 56, 57, 57, 58, 58, 59, 59, 60, 60, 61, 61, 62, 62, 63, 63, 64, 64, 65, 65, 66, 66, 67, 67, 68, 68, 69, 69, 70, 70, 71, 71, 72, 72, 73, 73, 74, 74, 75, 75, 76, 76, 77, 77, 78, 78, 79, 79, 80, 80, 81, 81, 82, 82, 83, 83, 84, 84, 85, 85, 86, 86, 87, 87, 88, 88, 89, 89, 90, 90, 91, 91, 92, 92, 93, 93, 94, 94, 95, 95, 96, 96, 97, 97, 98, 98, 99, 99, 100, 100, 101, 101, 102, 102, 103, 103, 104, 104, 105, 105, 106, 106, 107, 107, 108, 108, 109, 109, 110, 110, 111, 111, 112, 112, 113, 113, 114, 114, 115, 115, 116, 116, 117, 117, 118, 118, 119, 119, 120, 120, 121, 121, 122, 122, 123, 123, 124, 124, 125, 125, 126, 126, 127, 127, 128, 128, 129, 129, 130, 130, 131, 131, 132, 132, 133, 133, 134, 134, 135, 135, 136, 136, 137, 137, 138, 138, 139, 139, 140, 140, 141, 141, 142, 142, 143, 143, 144, 144, 145, 145, 146, 146, 147, 147, 148, 148, 149, 149, 150, 150, 151, 151, 152, 152, 153, 153, 154, 154, 155, 155, 156, 156, 157, 157, 158, 158, 159, 159, 160, 160, 161, 161, 162, 162, 163, 163, 164, 164, 165, 165, 166, 166, 167, 167, 168, 168, 169, 169, 170, 170, 171, 171, 172, 172, 173, 173, 174, 174, 175, 175, 176, 176, 177, 177, 178, 178, 179, 179, 180, 180, 181, 181, 182, 182, 183, 183, 184, 184, 185, 185, 186, 186, 187, 187, 188, 188, 189, 189, 190, 190, 191, 191, 192, 192, 193, 193, 194, 194, 195, 195, 196, 196, 197, 197, 198, 198, 199, 199, 200, 200, 199, 199, 198, 198, 197, 197, 196, 196, 195, 195, 194, 194, 193, 193, 192, 192, 191, 191, 190, 190, 189, 189, 188, 188, 187, 187, 186, 186, 185, 185, 184, 184, 183, 183, 182, 182, 181, 181, 180, 180, 179, 179, 178, 178, 177, 177, 176, 176, 175, 175, 174, 174, 173, 173, 172, 172, 171, 171, 170, 170, 169, 169, 168, 168, 167, 167, 166, 166, 165, 165, 164, 164, 163, 163, 162, 162, 161, 161, 160, 160, 159, 159, 158, 158, 157, 157, 156, 156, 155, 155, 154, 154, 153, 153, 152, 152, 151, 151, 150, 150, 149, 149, 148, 148, 147, 147, 146, 146, 145, 145, 144, 144, 143, 143, 142, 142, 141, 141, 140, 140, 139, 139, 138, 138, 137, 137, 136, 136, 135, 135, 134, 134, 133, 133, 132, 132, 131, 131, 130, 130, 129, 129, 128, 128, 127, 127, 126, 126, 125, 125, 124, 124, 123, 123, 122, 122, 121, 121, 120, 120, 119, 119, 118, 118, 117, 117, 116, 116, 115, 115, 114, 114, 113, 113, 112, 112, 111, 111, 110, 110, 109, 109, 108, 108, 107, 107, 106, 106, 105, 105, 104, 104, 103, 103, 102, 102, 101, 101, 100, 100, 99, 99, 98, 98, 97, 97, 96, 96, 95, 95, 94, 94, 93, 93, 92, 92, 91, 91, 90, 90, 89, 89, 88, 88, 87, 87, 86, 86, 85, 85, 84, 84, 83, 83, 82, 82, 81, 81, 80, 80, 79, 79, 78, 78, 77, 77, 76, 76, 75, 75, 74, 74, 73, 73, 72, 72, 71, 71, 70, 70, 69, 69, 68, 68, 67, 67, 66, 66, 65, 65, 64, 64, 63, 63, 62, 62, 61, 61, 60, 60, 59, 59, 58, 58, 57, 57, 56, 56, 55, 55, 54, 54, 53, 53, 52, 52, 51, 51, 50, 50, 49, 49, 48, 48, 47, 47, 46, 46, 45, 45, 44, 44, 43, 43, 42, 42, 41, 41, 40, 40, 39, 39, 38, 38, 37, 37, 36, 36, 35, 35, 34, 34, 33, 33, 32, 32, 31, 31, 30, 30, 29, 29, 28, 28, 27, 27, 26, 26, 25, 25, 24, 24, 23, 23, 22, 22, 21, 21, 20, 20, 19, 19, 18, 18, 17, 17, 16, 16, 15, 15, 14, 14, 13, 13, 12, 12, 11, 11, 10, 10, 9, 9, 8, 8, 7, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1, 1, 0, 0];
var circle = [0, 0, 5, 5, 7, 7, 9, 9, 10, 12, 12, 14, 14, 16, 16, 19, 17, 21, 19, 23, 21, 26, 22, 29, 24, 31, 25, 34, 26, 36, 28, 39, 29, 42, 30, 44, 31, 47, 33, 50, 34, 53, 35, 55, 35, 58, 36, 61, 37, 64, 38, 67, 38, 70, 39, 73, 40, 75, 40, 78, 41, 81, 41, 84, 41, 87, 42, 90, 42, 93, 42, 96, 42, 99, 42, 102, 42, 105, 42, 108, 42, 111, 41, 114, 41, 117, 41, 120, 40, 123, 40, 126, 39, 128, 38, 131, 38, 134, 37, 137, 36, 140, 35, 143, 35, 146, 34, 148, 33, 151, 31, 154, 30, 157, 29, 159, 28, 162, 26, 165, 25, 167, 24, 170, 22, 172, 21, 175, 19, 178, 17, 180, 16, 182, 14, 185, 12, 187, 10, 189, 9, 192, 7, 194, 5, 196, 3, 198, 0, 200, -2, 203, -4, 205, -6, 207, -8, 209, -11, 210, -13, 212, -15, 214, -18, 216, -20, 217, -22, 219, -25, 221, -28, 222, -30, 224, -33, 225, -35, 226, -38, 228, -41, 229, -43, 230, -46, 231, -49, 233, -52, 234, -54, 235, -57, 235, -60, 236, -63, 237, -66, 238, -69, 238, -72, 239, -74, 240, -77, 240, -80, 241, -83, 241, -86, 241, -89, 242, -92, 242, -95, 242, -98, 242, -101, 242, -104, 242, -107, 242, -110, 242, -113, 241, -116, 241, -119, 241, -122, 240, -125, 240, -127, 239, -130, 238, -133, 238, -136, 237, -139, 236, -142, 235, -145, 235, -147, 234, -150, 233, -153, 231, -156, 230, -158, 229, -161, 228, -164, 226, -166, 225, -169, 224, -171, 222, -174, 221, -177, 219, -179, 217, -181, 216, -184, 214, -186, 212, -188, 210, -191, 209, -193, 207, -195, 205, -197, 203, -199, 200, -202, 198, -204, 196, -206, 194, -208, 192, -209, 189, -211, 187, -213, 185, -215, 182, -216, 180, -218, 178, -220, 175, -221, 172, -223, 170, -224, 167, -225, 165, -227, 162, -228, 159, -229, 157, -230, 154, -232, 151, -233, 148, -234, 146, -234, 143, -235, 140, -236, 137, -237, 134, -237, 131, -238, 128, -239, 126, -239, 123, -240, 120, -240, 117, -240, 114, -241, 111, -241, 108, -241, 105, -241, 102, -241, 99, -241, 96, -241, 93, -241, 90, -240, 87, -240, 84, -240, 81, -239, 78, -239, 75, -238, 73, -237, 70, -237, 67, -236, 64, -235, 61, -234, 58, -234, 55, -233, 53, -232, 50, -230, 47, -229, 44, -228, 42, -227, 39, -225, 36, -224, 34, -223, 31, -221, 29, -220, 26, -218, 23, -216, 21, -215, 19, -213, 16, -211, 14, -209, 12, -208, 9, -206, 7, -204, 5, -202, 3, -199, 1, -197, -2, -195, -4, -193, -6, -191, -8, -188, -9, -186, -11, -184, -13, -181, -15, -179, -16, -177, -18, -174, -20, -171, -21, -169, -23, -166, -24, -164, -25, -161, -27, -158, -28, -156, -29, -153, -30, -150, -32, -147, -33, -145, -34, -142, -34, -139, -35, -136, -36, -133, -37, -130, -37, -127, -38, -125, -39, -122, -39, -119, -40, -116, -40, -113, -40, -110, -41, -107, -41, -104, -41, -101, -41, -98, -41, -95, -41, -92, -41, -89, -41, -86, -40, -83, -40, -80, -40, -77, -39, -74, -39, -72, -38, -69, -37, -66, -37, -63, -36, -60, -35, -57, -34, -54, -34, -52, -33, -49, -32, -46, -30, -43, -29, -41, -28, -38, -27, -35, -25, -33, -24, -30, -23, -28, -21, -25, -20, -22, -18, -20, -16, -18, -15, -15, -13, -13, -11, -11, -9, -8, -8, -6, -6, -4, -4, -2, -2, 0, 1, 3, 3];
 //r=100/sqrt(2)
var circleinf = [0, 0, 5, 5, 7, 7, 9, 9, 10, 12, 12, 14, 14, 16, 16, 19, 17, 21, 19, 23, 21, 26, 22, 29, 24, 31, 25, 34, 26, 36, 28, 39, 29, 42, 30, 44, 31, 47, 33, 50, 34, 53, 35, 55, 35, 58, 36, 61, 37, 64, 38, 67, 38, 70, 39, 73, 40, 75, 40, 78, 41, 81, 41, 84, 41, 87, 42, 90, 42, 93, 42, 96, 42, 99, 42, 102, 42, 105, 42, 108, 42, 111, 41, 114, 41, 117, 41, 120, 40, 123, 40, 126, 39, 128, 38, 131, 38, 134, 37, 137, 36, 140, 35, 143, 35, 146, 34, 148, 33, 151, 31, 154, 30, 157, 29, 159, 28, 162, 26, 165, 25, 167, 24, 170, 22, 172, 21, 175, 19, 178, 17, 180, 16, 182, 14, 185, 12, 187, 10, 189, 9, 192, 7, 194, 5, 196, 3, 198, 0, 200, -2, 203, -4, 205, -6, 207, -8, 209, -11, 210, -13, 212, -15, 214, -18, 216, -20, 217, -22, 219, -25, 221, -28, 222, -30, 224, -33, 225, -35, 226, -38, 228, -41, 229, -43, 230, -46, 231, -49, 233, -52, 234, -54, 235, -57, 235, -60, 236, -63, 237, -66, 238, -69, 238, -72, 239, -74, 240, -77, 240, -80, 241, -83, 241, -86, 241, -89, 242, -92, 242, -95, 242, -98, 242, -101, 242, -104, 242, -107, 242, -110, 242, -113, 241, -116, 241, -119, 241, -122, 240, -125, 240, -127, 239, -130, 238, -133, 238, -136, 237, -139, 236, -142, 235, -145, 235, -147, 234, -150, 233, -153, 231, -156, 230, -158, 229, -161, 228, -164, 226, -166, 225, -169, 224, -171, 222, -174, 221, -177, 219, -179, 217, -181, 216, -184, 214, -186, 212, -188, 210, -191, 209, -193, 207, -195, 205, -197, 203, -199, 200, -202, 198, -204, 196, -206, 194, -208, 192, -209, 189, -211, 187, -213, 185, -215, 182, -216, 180, -218, 178, -220, 175, -221, 172, -223, 170, -224, 167, -225, 165, -227, 162, -228, 159, -229, 157, -230, 154, -232, 151, -233, 148, -234, 146, -234, 143, -235, 140, -236, 137, -237, 134, -237, 131, -238, 128, -239, 126, -239, 123, -240, 120, -240, 117, -240, 114, -241, 111, -241, 108, -241, 105, -241, 102, -241, 99, -241, 96, -241, 93, -241, 90, -240, 87, -240, 84, -240, 81, -239, 78, -239, 75, -238, 73, -237, 70, -237, 67, -236, 64, -235, 61, -234, 58, -234, 55, -233, 53, -232, 50, -230, 47, -229, 44, -228, 42, -227, 39, -225, 36, -224, 34, -223, 31, -221, 29, -220, 26, -218, 23, -216, 21, -215, 19, -213, 16, -211, 14, -209, 12, -208, 9, -206, 7, -204, 5, -202, 3, -199, 1, -197, -2, -195, -4, -193, -6, -191, -8, -188, -9, -186, -11, -184, -13, -181, -15, -179, -16, -177, -18, -174, -20, -171, -21, -169, -23, -166, -24, -164, -25, -161, -27, -158, -28, -156, -29, -153, -30, -150, -32, -147, -33, -145, -34, -142, -34, -139, -35, -136, -36, -133, -37, -130, -37, -127, -38, -125, -39, -122, -39, -119, -40, -116, -40, -113, -40, -110, -41, -107, -41, -104, -41, -101, -41, -98, -41, -95, -41, -92, -41, -89, -41, -86, -40, -83, -40, -80, -40, -77, -39, -74, -39, -72, -38, -69, -37, -66, -37, -63, -36, -60, -35, -57, -34, -54, -34, -52, -33, -49, -32, -46, -30, -43, -29, -41, -28, -38, -27, -35, -25, -33, -24, -30, -23, -28, -21, -25, -20, -22, -18, -20, -16, -18, -15, -15, -13, -13, -11, -11, -9, -8, -8, -6, -6, -4, -4, -2, -2, 0, 1, 3, 3,0,0];
anims.push([0,0]);
anims.push(line);
anims.push(lineinf);
anims.push(circle);
anims.push(circleinf);