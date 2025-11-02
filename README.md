# Microservices-Task

## Overview
This document provides details on testing various services after running the `docker-compose` file. These services include User, Product, Order, and Gateway Services. Each service has its own endpoints for testing purposes.

---

## Services and Endpoints

### **User Service**
- **Base URL:** `http://localhost:3000`
- **Endpoints:**
  - **List Users:**  
    ```
    curl http://localhost:3000/users
    ```
    Or open in your browser: [http://localhost:3000/users](http://localhost:3000/users)

---

### **Product Service**
- **Base URL:** `http://localhost:3001`
- **Endpoints:**
  - **List Products:**  
    ```
    curl http://localhost:3001/products
    ```
    Or open in your browser: [http://localhost:3001/products](http://localhost:3001/products)

---

### **Gateway Service**
- **Base URL:** `http://localhost:3003/gateway`
- **Endpoints:**
  - **Users:**  
    ```
    curl http://localhost:3003/gateway/users
    ```
  - **Products:**  
    ```
    curl http://localhost:3003/gateway/products
    ```


---

## Instructions
1. Start all services using the `docker-compose` file:
   ```
   docker-compose up
   ```
2. Once the services are running, use the above endpoints to verify the functionality.

Happy testing!


<img width="785" height="196" alt="output" src="https://github.com/user-attachments/assets/c27325d4-8b3e-4eb8-bfb3-248b46fe706c" />

---

<img width="729" height="193" alt="output1" src="https://github.com/user-attachments/assets/7f7cdb94-284a-4778-a6dc-b5678b6fea43" />

---

<img width="953" height="220" alt="output2" src="https://github.com/user-attachments/assets/315269f0-b5ad-47d1-b64b-b14ba5d44d8e" />

---

<img width="959" height="272" alt="output3" src="https://github.com/user-attachments/assets/031c8df8-c881-48dc-9afa-b89b7ae83e95" />

---

<img width="959" height="200" alt="output4" src="https://github.com/user-attachments/assets/c99d579c-c81d-4de7-90c2-8bbe16e091a1" />

---

<img width="959" height="280" alt="output5" src="https://github.com/user-attachments/assets/7519ee75-4d7d-4436-a47f-8c25259416a8" />


