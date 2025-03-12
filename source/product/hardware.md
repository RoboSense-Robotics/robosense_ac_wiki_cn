# 硬件生态
## 开发板  
### Radxa ROCK5B+  

Radxa ROCK5B+ 是一款基于 RK3588 芯片组的优雅单板计算机（SBC），由 Radxa 公司设计，主要面向开发者、创客及高性能嵌入式应用场景，其参数规格如下所示：  

<table class="docutils align-default">
    <thead>
        <tr class="row-odd" align="left">
            <th class="head" colspan=4>Radxa ROCK5B+</th>
        </tr>
    </thead>
    <tbody>
        <tr class="row-even">
            <td>MCU</td>
            <td colspan=3>Rockchip RK3588</td>
        </tr>
        <tr class="row-odd">
            <td>CPU</td>
            <td>8核64位处理器<br>4 个 Cortex-A76@2.4GHz<br>4 个 Cortex-A55@1.8GHz</td>
            <td>NPU</td>
            <td>AI 算力 6 TOPS@INT8</td>
        </tr>
        <tr class="row-even">
            <td>RAM</td>
            <td>16 GB LPDDR5</td>
            <td>存储</td>
            <td>板载 eMMC：64 GB</td>
        </tr>
        <tr class="row-odd">
            <td>多媒体</td>
            <td colspan=3>硬件解码：H.265/H.264/AV1/AVS2 8K@60fps<br>硬件编码：H.265/H.264 8K@30fps</td>
        </tr>
        <tr class="row-even">
            <td>供电</td>
            <td colspan=3>USB Type-C PD 2.0 供电：支持 9V@2A、12V@2A、15V@2A 和 20V@2A</td>
        </tr>
        <tr class="row-odd">
            <td>尺寸</td>
            <td colspan=3>100mm x 75 mm</td>
        </tr>
        <tr class="row-even">
            <td>支持的SDK<br>模块</td>
            <td colspan=3>驱动、采集、监控、标定、定位、SLAM、目标检测与识别、语义分割、点云与视觉融合</td>
        </tr>
    </tbody>
</table> 

开发板详细链接：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[radxa rock5+](https://radxa.com/products/rock5/5bp)  
LLinux Loader 文件：&nbsp;[RK3588_SPL_Loader_v1.15.113](https://cdn.robosense.cn/AC_wiki/rk3588_spl_loader_v1.15.113.bin)  
Linux 镜像：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[debian12 系统镜像](https://cdn.robosense.cn/AC_wiki/rock-5b-plus_bookworm_kde_b2.output.img.xz)  
Linux 镜像烧录指南：[radxa develop linux](https://docs.radxa.com/rock5/rock5b/low-level-dev/maskrom/linux)  
