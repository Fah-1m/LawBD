import React from 'react';
import { Bar, BarChart, Line, LineChart, XAxis, YAxis, } from 'recharts';


const Rechart = ({infodata}) => {
    console.log(infodata)
    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
         C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
         Z`
      );
      
      const TriangleBar = (props) => {
        const {
          fill, x, y, width, height,
        } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
    return (
        <div>
 <BarChart className='w- md:mx-auto md:my-4' width={600} height={300} data={infodata}>
    <XAxis dataKey={"name"}  />
    <YAxis dataKey={"fee"} />
    <Bar dataKey={"fee"} fill="#8884d8"
      shape={<TriangleBar />} />
  </BarChart>
        </div>
    );
};

export default Rechart;