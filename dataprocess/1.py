import cv2
import yolov8

class VideoCamera(object):
    def __init__(self, camera_source=0):
        # 使用笔记本摄像头作为视频源 (0 通常是默认摄像头)
        # 后续可以更换为外部摄像头
        self.video = cv2.VideoCapture(camera_source)
        self.yolo_model = yolov8.load_model()  # 加载 YOLOv8 模型

    def __del__(self):
        self.video.release()

    def get_frame(self):
        success, image = self.video.read()
        if success:
            # 进行对象检测
            results = self.yolo_model.detect(image)
            # 处理结果
            image = self.process_results(image, results)
            # 返回处理后的图像
            return image
        else:
            return None

    def process_results(self, image, results):
        # 这里可以添加处理检测结果的代码，例如绘制边界框、标记等
        # ...
        return image  # 返回处理后的图像

def main():
    camera = VideoCamera()
    while True:
        frame = camera.get_frame()
        if frame is not None:
            # 显示帧
            cv2.imshow('Video', frame)
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

if __name__ == '__main__':
    main()
