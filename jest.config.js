/* eslint-disable */
const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouterDOM = require('react-router-dom')

const config = {
  moduleNameMapper: {
    '^store/(./*)$': '<rootDir>/src/store/$1',
    '^assets/(./*)$': '<rootDir>/src/assets/$1',
    '\\.(css|less|sass|scss)$': '<rootDir>/mock_files/styleMock.js',
    '\\.(gif|ttf|eot|jpg|jpeg|png)$': '<rootDir>/mock_files/fileMock.js',
  },
  globals: {
    React,
    'react-dom': ReactDOM,
    'react-router-dom': ReactRouterDOM,
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleDirectories: ['node_modules', 'src'],
}

module.exports = config
