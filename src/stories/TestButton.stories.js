import React from "react";
import '../assets/main.css';
import TestButton from "../components/TestButton";

export default {
    title: 'Tests',
};

export const redTestButton = () => (
    <TestButton />
)
export const greenTestButton = () => (
    <TestButton className="bg-green-700" />
)
