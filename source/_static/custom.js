document.addEventListener('DOMContentLoaded', function() {
    // 创建 lightbox 元素
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    // 获取所有文档中的图片
    const images = document.querySelectorAll('.document img');
    let scale = 1;
    let isDragging = false;
    let startX, startY, translateX = 0, translateY = 0;

    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', e => {
            lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
            lightbox.classList.add('show');
            scale = 1;
            translateX = 0;
            translateY = 0;
            updateTransform();
            const lightboxImg = getLightboxImage();
            if (lightboxImg) {
                lightboxImg.style.cursor = 'grab';
                // 阻止图片的默认拖动行为
                lightboxImg.addEventListener('dragstart', e => e.preventDefault());
            }
        });
    });

    // 点击 lightbox 背景关闭
    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) {
            lightbox.classList.remove('show');
        }
    });

    // 获取 lightbox 中的图片
    function getLightboxImage() {
        return lightbox.querySelector('img');
    }

    // 更新图片变换
    function updateTransform() {
        const img = getLightboxImage();
        if (img) {
            img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
        }
    }

    // 处理鼠标滚轮缩放
    lightbox.addEventListener('wheel', e => {
        e.preventDefault();
        const delta = e.deltaY * -0.01;
        scale = Math.min(Math.max(0.1, scale + delta), 10);
        updateTransform();
    });

    // 处理拖拽
    lightbox.addEventListener('mousedown', e => {
        const img = getLightboxImage();
        if (img && e.target === img) {
            e.preventDefault();
            e.stopPropagation();
            isDragging = true;
            startX = e.clientX - translateX;
            startY = e.clientY - translateY;
            img.style.cursor = 'grabbing';
        }
    });

    lightbox.addEventListener('mousemove', e => {
        if (isDragging) {
            e.preventDefault();
            e.stopPropagation();
            translateX = e.clientX - startX;
            translateY = e.clientY - startY;
            updateTransform();
        }
    });

    // 将mouseup事件监听器添加到document上
    document.addEventListener('mouseup', e => {
        if (isDragging) {
            e.preventDefault();
            e.stopPropagation();
            const img = getLightboxImage();
            if (img) {
                img.style.cursor = 'grab';
            }
            isDragging = false;
        }
    });

    // 确保鼠标离开 lightbox 时重置鼠标样式
    lightbox.addEventListener('mouseleave', e => {
        const img = getLightboxImage();
        if (img) {
            img.style.cursor = 'grab';
        }
    });
});
