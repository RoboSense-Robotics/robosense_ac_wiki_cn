# 驱动
## rs_driver
rs_driver 是 RoboSense 机器人传感器产品的驱动。
它基于 C/C++ 语言开发，为用户提供底层驱动函数，负责对设备进行配置、初始化、校准等基本操作并实现硬件的设备检测和状态管理，确保传感器的高效运行。
同时提供设备的开发者接口，支持传感器配置、数据采集、设备控制等功能，便于开发者快速集成和使用设备。

详细代码：[rs driver](https://github.com/RoboSense-LiDAR/rs_driver/tree/dev_opt_AC2)

## ROS Driver  
对于使用ROS的开发者，我们开发了robosense_ac_driver，这是一个基于rs_driver的ROS wrapper工程，将来自于rs_driver的传感器消息通过ROS发出。
同时，也可作为一个如何将rs_driver嵌入到其他C++工程中的示例。该工程AC1与AC2均可用，ROS1/ROS2均支持。

详细代码：[robosense_ac_driver](https://github.com/RoboSense-Robotics/robosense_ac_driver/tree/main)
