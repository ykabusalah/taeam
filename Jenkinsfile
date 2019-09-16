pipeline {
    agent none
    stages {
        stage('Run tests') {
            parallel {
                stage('GCC Compiler') {
                    agent {
                        docker { image 'nashtrash/isd-block' }
                    }
                    environment {
                        CC = 'gcc-8'
                        CXX = 'g++-8'
                    }
                    steps {
                        sh 'cmake .'
                        sh 'make'
                        sh './bin/testing'
                    }
                }
                stage('Clang Compiler') {
                    agent {
                        docker { image 'nashtrash/isd-block' }
                    }
                    environment {
                        CC = 'clang-7'
                        CXX = 'clang++-7'
                    }
                    steps {
                        sh 'cmake .'
                        sh 'make'
                        sh './bin/testing'
                    }
                }
                stage('Lint') {
                    agent {
                        docker { image 'nashtrash/isd-block' }
                    }
                    steps {
                        sh """#!/bin/bash
                            find . -regex '.*\\.\\(cpp\\|h\\)'
                        """
                    }
                }
            }
        }
    }
}