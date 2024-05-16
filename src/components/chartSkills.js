import { Radar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useState, useEffect } from 'react';

function ChartSkills(props){
    const [chartExists, setChartExists] = useState(false);
    const skills = props.skills;
    let nameSkill = [];
    let levelSkill = [];

    skills.forEach(skill => {
        nameSkill.push(skill.nameSkill)
        levelSkill.push(skill.levelSkill)
    });

    const data_chart = {
        labels: nameSkill,
        datasets: [
            {
                label: 'Level Skill',
                data: levelSkill,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
            },
        ],
    };

    const options = {
        scales: {
            r: {
                min:0,
                max: 10, 
                type: 'radialLinear',
                angleLines: { display: true },
                ticks: { display: true, beginAtZero: true },
                pointLabels: { display: true },
            },
        },
    };

    useEffect(() => {
        setChartExists(true);
        return () => setChartExists(false);
    }, []);

    return (
        <div>
            {chartExists && <Radar data={data_chart} options={options} />}
        </div>
    )
}

export default ChartSkills;