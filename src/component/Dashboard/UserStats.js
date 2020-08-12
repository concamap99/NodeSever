import axios from 'axios';
import React, { Component } from 'react';

import CanvasJSReact from '../../canvars/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class UserStats extends Component {
    constructor(props) {
        super(props);
    }
    render() {
		const {data, total} = this.props;
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			// title:{
			// 	text: "Thống kê người dùng",
			// 	fontSize: 17,
			// 	fontFamily: 'Roboto',
			// 	fontWeight: 'Bold'
			// },
			data: [{
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: [
					{ y: Math.round(( data.sinh_vien / total ) * 100), label: "Sinh viên" },
					{ y: Math.round(( data.giao_vien / total ) * 100), label: "Giáo viên" },
				]
			}]
		}
		return (
			<div>
				<CanvasJSChart options = {options} />
			</div>
		);
	}
}
