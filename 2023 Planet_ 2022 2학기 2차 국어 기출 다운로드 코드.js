  <script>
    document.getElementById('download-link').addEventListener('click', function () {
      // 새 ZIP 파일 생성
      var zip = new JSZip();
      
      // 이미지 정보 배열 생성 (이미지 이름과 URL)
      var images = [
        { name: 'image1.jpg', url: 'https://i.ibb.co/znvjVqB/2022-2-1-1-Planet.jpg' },
        { name: 'image2.jpg', url: 'https://i.ibb.co/DL2ScGG/2022-2-1-2.jpg' },
        // 필요한 만큼 이미지 정보 추가
      ];

      // 이미지 정보 배열을 순회하면서 ZIP 파일에 추가
      images.forEach(function (image) {
        // 이미지 이름과 URL을 사용하여 ZIP 파일에 추가
        zip.file('image1.jpg', 'https://i.ibb.co/znvjVqB/2022-2-1-1-Planet.jpg', { binary: true });
      });

      // ZIP 파일 생성
      zip.generateAsync({ type: 'blob' }).then(function (content) {
        // ZIP 파일을 다운로드할 링크 생성
        var a = document.createElement('a');
        a.href = URL.createObjectURL(content);
        a.download = 'korean_exam_images.zip';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });
    });
  </script>
