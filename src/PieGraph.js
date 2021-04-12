import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const colors = ["#C04E4E", "#76A896", "#C7B454", "#8B659D", "#5A77A1"];



class PieGraph extends PureComponent {
    
    render() {
        const { data } = this.props;
        return (
            <ResponsiveContainer width="100%" height={400}>
                <PieChart height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="45%"
                        labelLine={false}
                        paddingAngle={8}
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                        innerRadius={30}
                        outerRadius={60}
                        fill="red"
                        dataKey="value"
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} name={entry.name}/>
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        )
    }
}

export default PieGraph;