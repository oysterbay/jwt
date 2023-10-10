pipeline {
    agent any
    tools {
        maven 'maven'
    }
    stages {
        stage('Build Maven') {
            steps {
                checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: '46df9fad-c8a7-407a-95ad-8f0f42621d5e', url: 'https://github.com/OysterBay/jwt']])
                sh 'mvn clean install'
            }
        }
        stage('Build docker image') {
            steps {
                script {
                    sh 'docker build -t shreddedmofo/fabflix .'
                }
            }
        }
        stage('push image to dockerhub') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'dockerpassword', variable: 'dockerpassword')]) {
                        sh 'docker login -u shreddedmofo -p ${dockerpassword}'
                        sh 'docker push shreddedmofo/fabflix'
                    }
                }
            }
        }
    }
}
