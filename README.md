# 🌩️ Portfolio Deployment on AWS using Terraform & DevOps Tools

## 📘 Project Overview
This project demonstrates a **fully automated deployment** of a personal portfolio website on **AWS Cloud** using **Terraform** and modern **DevOps tools**.

The goal is to automate infrastructure provisioning, containerize the application, ensure code quality and security, and deploy using a CI/CD pipeline.

---

## 🏗️ Architecture Overview

### 🧱 AWS Services Used
| Service | Purpose |
|----------|----------|
| **EC2 (Ubuntu)** | Hosts the containerized portfolio website |
| **Application Load Balancer (ALB)** | Distributes incoming traffic between EC2 instances |
| **RDS (MySQL)** | Stores portfolio or form data |
| **ECR (Elastic Container Registry)** | Stores Docker images |
| **Route 53** | DNS hosting for the domain (e.g., `devopswithravi.xyz`) |
| **ACM (AWS Certificate Manager)** | SSL certificate for HTTPS |
| **CloudWatch** | Monitoring and log collection |
| **SNS (Simple Notification Service)** | Sends alerts or notifications |

> ✅ **Note:** This project uses only **public subnets** for simplicity. No private subnets or S3 buckets are used.

---

## 🛠️ DevOps Tools Used

| Tool | Purpose |
|------|----------|
| **Git & GitHub** | Version control and code repository |
| **GitHub Actions** | CI/CD automation |
| **Docker** | Containerization of the portfolio app |
| **Trivy** | Security vulnerability scanning |
| **SonarQube** | Code quality and static analysis |
| **Terraform** | Infrastructure as Code (IaC) for provisioning AWS resources |

---

## ⚙️ CI/CD Workflow

1. **Developer pushes code** to GitHub.
2. **GitHub Actions** pipeline triggers automatically.
3. **Pipeline stages:**
   - **Code Quality Check** → SonarQube
   - **Security Scan** → Trivy
   - **Docker Build** → Builds app image
   - **Push to ECR** → Uploads image to AWS
   - **Deploy to EC2** → Pulls latest image and runs container

---

## 🌐 Infrastructure Flow

Developer → GitHub → GitHub Actions CI/CD
↓
SonarQube → Trivy → Docker Build → Push to ECR
↓
EC2 pulls image from ECR → Application Load Balancer
↓
Route 53 + ACM (HTTPS + DNS)
↓
End User accesses portfolio site
↓
RDS stores form or application data
↓
CloudWatch monitors → SNS sends alerts

yaml
Copy code

---

## 🧩 Terraform Structure

aws-portfolio-infra/
├── main.tf
├── variables.tf
├── outputs.tf
├── provider.tf
├── terraform.tfvars
└── modules/
├── ec2/
├── alb/
├── rds/
├── ecr/
├── route53/
├── acm/
├── cloudwatch/
└── sns/

sql
Copy code

Each module contains:
main.tf
variables.tf
outputs.tf

🔁 GitHub Actions Workflow Example (.github/workflows/ci-cd.yml)
📊 Monitoring Setup
CloudWatch for metrics (CPU, memory, network, ALB latency)

SNS sends notifications for alarms (e.g., EC2 health, high load, downtime)

🎯 Key Highlights
Fully automated AWS deployment with Terraform

Secure & efficient CI/CD using GitHub Actions

SonarQube + Trivy ensure high-quality, secure code

DNS, HTTPS, and monitoring integrated

Easily scalable via EC2 AMI or Load Balancer

🌍 Final Output
Portfolio URL:
🔗 https://devopswithravi.xyz

Hosted on AWS with automation, CI/CD, monitoring, and security.

👨‍💻 Author
Ravi Teja Deevela
🔗 https://devopswithravi.xyz
