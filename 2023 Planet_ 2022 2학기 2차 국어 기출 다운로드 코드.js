<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.5.0/jszip.min.js"></script>
<script>
    document.getElementById('download-link').addEventListener('click', function () {
        // 새 ZIP 파일 생성
        var zip = new JSZip();
        
        // ZIP 파일에 이미지 추가
        zip.file('국어 기출 1페이지.jpg', 'https://i.ibb.co/znvjVqB/2022-2-1-1-Planet.jpg');
        zip.file('국어 기출 2페이지.jpg', 'https://i.ibb.co/DL2ScGG/2022-2-1-2.jpg');
        zip.file('국어 기출 3페이지.jpg', 'https://i.ibb.co/yqXMpvN/2022-2-1-3.jpg');
        zip.file('국어 기출 4페이지.jpg', 'https://i.ibb.co/QJYrkdj/2022-2-1-4.jpg');
        zip.file('국어 기출 5페이지.jpg', 'https://i.ibb.co/sPBGjxB/2022-2-1-5.jpg');
        zip.file('국어 기출 6페이지.jpg', 'https://i.ibb.co/58xJD5T/2022-2-1-6.jpg');
        zip.file('국어 기출 7페이지.jpg', 'https://i.ibb.co/0hXxxZp/2022-2-1-7-Planet.jpg');
        // 필요한 만큼 더 많은 이미지 추가

        // ZIP 파일 생성
        zip.generateAsync({ type: 'blob' }).then(function (content) {
            // ZIP 파일을 다운로드할 링크 생성
            var a = document.createElement('a');
            a.href = URL.createObjectURL(content);
            a.download = '2022 낙원중 2학기 1차 국어 기출문제.zip';
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    });
</script>
