# 工具  
## 采集  
基于 ros2 开发的超级传感器采集软件包，可通过参数配置方式实现不同节点数据采集功能，支持 .db3 和 .mcap 两种数据采集格式。  

详细代码：[AC1 ROS2 collect](http://10.10.0.20/super_sensor_sdk/ros2_sdk/rs_collect)  

## 监控  
监控 ros2 中关心的一些指标，例如: 内存/CPU/IO使用率、消息帧率、消息时间戳与当前系统时间的差值等，监控结果会通过日志和 topic 输出。同时，该软件包还提供了将监控结果数据生成可视化报告的 python 脚本，可以本地生成包含简易统计结果以及折线图的 html 格式报告。  

详细代码：[AC1 ROS2 monitor](http://gitlab.robosense.cn/super_sensor_sdk/ros2_sdk/rs_monitor/-/tree/main)  

## 标定  
**相机内参标定**  
针孔相机会使图像产生严重的畸变，主要的畸变类型包括径向畸变和切向畸变。本模块根据张正友标定法原理提供相机内参标定工具。开发者可根据工具指引，在不同角度拍摄靶板（可利用本模块中提供的示例图案进行制作）进行相机标定，以提供其他模块所需要的相机内参与畸变系数。 
 
以下视频提供了标定场内相机内参标定的实时演示效果，主要使用的硬件配置为：  

<table class="docutils align-default">
    <tbody>
        <tr class="row-even">
            <td>计算平台</td>
            <td>CPU: Intel® Core™ i5-1135G7 @ 2.40GHz × 8 <br> MEM: 16GB</td>
        </tr>
        <tr class="row-odd">
            <td>传感器</td>
            <td>AC1</td>
        </tr>
    </tbody>
</table>   
<iframe style="margin-bottom: 24px;" width="100%" height="400" src="https://cdn.robosense.cn/AC_wiki/camera_intrinsics_calib.mp4" frameborder="0" allowfullscreen></iframe>  

demo数据：[AC1 Camera Intrinsics Calibration data](https://cdn.robosense.cn/AC_wiki/camera_intrinsics_calib.zip)   

详细代码：[AC1 Camera Intrinsics Calibration code](http://gitlab.robosense.cn/super_sensor_sdk/ros2_sdk/calibration/-/tree/main)   

**相机到雷达的标定**  
本模块提供相机-雷达标定工具，复用相机内参标定靶板，对相机与雷达分别进行靶板位姿估计，以提供其他模块所需要相机-雷达外参。标定时请确保靶板处于图像与点云的 FOV 之内，并尽量保持 AC1 稳定，避免因为传感器抖动引入标定误差。  

demo数据：[AC1 Camera to Lidar Calibration data](https://cdn.robosense.cn/AC_wiki/camera_lidar_calib.zip)  

详细代码：[AC1 Camera to Lidar Calibration code](http://gitlab.robosense.cn/super_sensor_sdk/ros2_sdk/calibration/-/tree/main)   

**AC1 传感器到移动轮式平台外参标定**  
本模块提供 AC1-移动轮式平台外参标定（角度标定）。本模块需提前录制两段数据：一段沿着直线匀速行驶的数据、一段绕固定轴匀速旋转的数据。开发者按照工具操作指引，启动工程后依次播放这两段数据，完成标定后输出传感器到移动轮式平台的角度外参，平移部分需开发者进行测量后，填入标定文件。  

demo数据：[AC1 to Wheel Platform Calibration data](https://cdn.robosense.cn/AC_wiki/calibration_extrinsic.zip)  

详细代码：[AC1 to Wheel Platform Calibration code](http://gitlab.robosense.cn/super_sensor_sdk/ros2_sdk/calibration/-/tree/main)   

## 编译环境  
该工具用于管理 Active Camera SDK 的跨平台编译和本地编译环境的 Docker 容器。包含了容器管理、镜像管理以及自动化环境设置等功能。  

针对 ros2 humble 版本，这里分别提供了 linux 平台下的 x86 以及 radxa ARM 版本的交叉编译镜像。  
x86 编译镜像：[AC1ros2_humble_compile_ubuntu20_x64.tgz](https://cdn.robosense.cn/AC_wiki/ros2_humble_compile_ubuntu20_x64.tgz)  
radxa ARM 交叉编译镜像：[AC1debian12_cross_compile_humble.tgz](https://cdn.robosense.cn/AC_wiki/debian12_cross_compile_humble.tgz)  

详细代码：[AC1 Cross Compilation](http://10.10.0.20/super_sensor_sdk/ros2_sdk/sdk_infra/-/tree/main/tools/cross_compilation)  