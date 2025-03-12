# 驱动
## Driver  
Driver 是 RoboSense 机器人传感器产品的驱动。它基于 C/C++ 语言开发，为用户提供底层驱动函数，负责对设备进行配置、初始化、校准等基本操作并实现硬件的设备检测和状态管理，确保传感器的高效运行。同时提供设备的开发者接口，支持传感器配置、数据采集、设备控制等功能，便于开发者快速集成和使用设备。  
详细代码：[AC1 Driver](http://gitlab.robosense.cn/rs_share/rslidar/rs_driver/-/tree/dev_opt_ac1.2)   

## ROS Driver  
ROS driver 是一个全新的 ROS 包，专门用于连接 RoboSense 生产的机器人传感器产品。该驱动程序可以在安装了 ROS noetic 环境的 ubuntu20.04、ARM Debian12 等操作系统下运行。  
详细代码：[AC1 ROS Driver](http://10.10.0.20/super_sensor_sdk/ros_ac_sdk_infra/-/tree/main)  

## ROS2 Driver  
ROS2 driver 是一个全新的 ROS2 包，专门用于连接 RoboSense 生产的机器人传感器产品。该驱动程序可以在安装了 ROS2 环境（humble、jazzy）的 ubuntu18.04/20.04/22.04，ARM Debian12 等操作系统下运行。  
详细代码：[AC1 ROS2 Driver](http://gitlab.robosense.cn/super_sensor_sdk/ros2_sdk/sdk_infra/-/tree/main/modules/ros_metas) 
