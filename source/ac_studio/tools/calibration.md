# 标定  
## 相机内参标定
Active Camera 在出厂时已经完成了相机的内参标定，以下提供的方法供开发者在有需要时，重新标定使用。

针孔相机会使图像产生严重的畸变，主要的畸变类型包括径向畸变和切向畸变。本模块根据张正友标定法原理提供相机内参标定工具。

开发者可根据工具指引，在不同角度拍摄靶板（可利用本模块中提供的示例图案进行制作）进行相机标定，以提供其他模块所需要的相机内参与畸变系数。 
 
以下视频提供了标定场内相机内参标定的实时演示效果，主要使用的硬件配置为：  

<table class="docutils align-default" style="width: 100%;">
    <tbody>
        <tr class="row-even centered-table-text">
            <td>计算平台</td>
            <td>CPU: Intel® Core™ i5-1135G7 @ 2.40GHz × 8 <br> MEM: 16GB</td>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>传感器</td>
            <td>AC1</td>
        </tr>
    </tbody>
</table>   

<div style="margin-bottom: 24px; position:relative; width:100%; padding-top: 56.25%;" class="video-container">
    <iframe src="https://cdn.robosense.cn/AC_wiki/camera_intrinsics_calib.mp4" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
</div>

视频数据：[AC1 Camera Intrinsics Calibration data](https://cdn.robosense.cn/AC_wiki/camera_intrinsics_calib.zip)   
详细代码：[AC1 Camera Intrinsics Calibration code](https://github.com/RoboSense-Robotics/robosense_ac_calibration)

## 相机到雷达的标定
Active Camera 在出厂时已经完成了相机到雷达的标定，以下提供的方法供开发者在有需要时，重新标定使用。

本模块提供相机-雷达标定工具，复用相机内参标定靶板，对相机与雷达分别进行靶板位姿估计，以提供其他模块所需要相机-雷达外参。

标定时请确保靶板处于图像与点云的 FOV 之内，并尽量保持 AC1 稳定，避免因为传感器抖动引入标定误差。  

视频数据：[AC1 Camera to Lidar Calibration data](https://cdn.robosense.cn/AC_wiki/camera_lidar_calib.zip)  
详细代码：[AC1 Camera to Lidar Calibration code](https://github.com/RoboSense-Robotics/robosense_calibration_extrinsic)

## 相机到IMU的标定
Active Camera 在出厂时已经完成了相机到IMU的标定，以下提供的方法供开发者在有需要时，重新标定使用。

本模块提供相机-IMU标定工具，复用相机内参标定靶板，在不同角度下对相机进行靶板位姿估计，结合IMU的运动数据，采用手眼标定的方法进行相机-IMU标定，以提供其他模块所需要相机-IMU外参。

标定时请确保靶板处于图像 FOV 之内，并尽量保持 AC1 稳定，避免因为传感器抖动引入标定误差。

<div style="margin-bottom: 24px; position:relative; width:100%; padding-top: 56.25%;" class="video-container">
    <iframe src="https://cdn.robosense.cn/AC_wiki/camera2imu_calib.mp4" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
</div>

视频数据：[AC1 Camera to IMU Calibration data](https://cdn.robosense.cn/AC_wiki/camera_imu_calib.zip)  
详细代码：[AC1 Camera to IMU Calibration code](https://github.com/RoboSense-Robotics/robosense_ac_calibration)

## AC1 传感器到移动轮式平台外参标定
本模块提供 AC1-移动轮式平台外参标定（角度标定）。本模块需提前录制两段数据：
- 一段沿着直线匀速行驶的数据
- 一段绕固定轴匀速旋转的数据

开发者按照工具操作指引，启动工程后依次播放这两段数据，完成标定后输出传感器到移动轮式平台的角度外参，平移部分需开发者进行测量后，填入标定文件。  

视频数据：[AC1 to Wheel Platform Calibration data](https://cdn.robosense.cn/AC_wiki/calibration_extrinsic.zip)  
详细代码：[AC1 to Wheel Platform Calibration code](https://github.com/RoboSense-Robotics/robosense_calibration_extrinsic)

## AC1 传感器到机械臂外参标定
本模块提供 AC1-机械臂外参标定（AC1固定于机械臂末端）。

结合机械臂的末端姿态与点云配准的结果，采用手眼标定的方法进行AC1-机械臂外参标定。

标定时需控制机械臂沿不同方向进行运动，完成标定后程序输出 AC1到机械臂末端的外参。

<div style="margin-bottom: 24px; position:relative; width:100%; padding-top: 56.25%;" class="video-container">
    <iframe src="https://cdn.robosense.cn/AC_wiki/sensor_to_mechanical_arm.mp4" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
</div>

视频数据：[AC1 to Robotic Arm Calibration data](https://cdn.robosense.cn/AC_wiki/sensor_to_arm_calib.zip)  
详细代码：[AC1 to Robotic Arm Calibration code](https://github.com/RoboSense-Robotics/robosense_calibration_extrinsic)
