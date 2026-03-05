# SLAM

本示例是一个融合 LiDAR、视觉和 IMU 等多传感器紧耦合里程计系统，基于 HKU-MARS 实验室开源的 VOXEL_SLAM 工程开发，针对 Active Camera 进行专门的适配和优化，加入了视觉约束，使得里程计能够实时输出 Active Camera 的姿态并生成带颜色信息的三维点云。开发者可参考此工程，在自有设备上快速搭建基于 AC2 的 SLAM 验证环境。

下面视频展示了 AC2 早期工程样机在室内场景的 SLAM 效果。

<div style="margin-bottom: 24px; position:relative; width:100%; padding-top: 42.46%;" class="video-container">
    <iframe src="https://cdn.robosense.cn/AC_wiki/AC2_SLAM.mp4" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
</div>

🚀 项目地址：[Voxel-Odom](https://github.com/RoboSense-Robotics/Voxel-Odom)
