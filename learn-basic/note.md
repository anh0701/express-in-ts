#Node JS
- cài nodemon cho ts:
    - install nodemon, ts-node
    - thêm 
        ```sh 
            "start": "nodemon index.ts" 
        ``` 
        vào "script"
    - chạy: npm start
- sử dụng biến môi trường cài dotenv
    - tạo file .env: ghi biến môi trường vào, ví dụ: PORT = 8000
    - import 'dotenv/config' và process.env.PORT
- để gợi ý code trong file ejs => cài extension: ejs language support
- nhớ dẫn đúng link vị trí lưu file ejs
- ấn ! để gợi ý khung html
- cách uninstall package: 
    ```sh 
        npm uninstall package-name 
    ```
#Docker
- FROM ten-thu-vien:version (chọn version trên dockerhub trùng version với code mình dùng)
- docker build -t app .
- docker images ls
- docker container ls: xem thông tin container
- docker stop CONTAINER_ID: dừng container
- docker rm CONTAINER_ID
- docker run -dp 5001:8000 app