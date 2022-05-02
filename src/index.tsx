import React from 'react';
import './index.css';
import {State} from './redux/State';
import {rerenderEntireTree} from './render';


rerenderEntireTree(State)
