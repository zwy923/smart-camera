import cv2
from ultralytics import YOLO
import numpy as np

def process_frame(frame):

    gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    return gray_frame

def is_significant_diff(diff, threshold=60):

    return np.mean(diff) > threshold

def save_and_recognize(frame, model):

    cv2.imwrite("diff_frame.jpg", frame)
    results = model(frame)
    for r in results:
        print(r.boxes)


def capture_video(source, model):
    cap = cv2.VideoCapture(source)
    prev_frame = None

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        current_frame = process_frame(frame)

        if prev_frame is not None:
            diff = cv2.absdiff(current_frame, prev_frame)
            if is_significant_diff(diff):
                save_and_recognize(frame, model)  # 使用原始帧以保留更多细节

        prev_frame = current_frame

    cap.release()
    cv2.destroyAllWindows()

def load_model(model_path):

    try:
        model = YOLO(model_path)
        return model
    except Exception as e:
        print(f"Model loading failed: {e}")
        return None
    
def main():
    model_path = './yolov8n.pt'
    model = load_model(model_path)
    if model is None:
        return

    source = 0  # 默认使用电脑内置摄像头
    capture_video(source, model)

if __name__ == "__main__":
    main()
