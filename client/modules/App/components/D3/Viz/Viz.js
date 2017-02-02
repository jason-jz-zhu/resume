import React, { PropTypes, Component } from 'react';
import * as d3 from 'd3';

class Viz extends Component {

  static propTypes = {
    data: PropTypes.any,
  }

  componentDidMount() {
    this.viz(this.props.data);
  }

  componentDidUpdate() {
    this.viz(this.props.data);
  }

  // add viz function
  viz = (data) => {
    const viz = d3.select('#viz')
        .append('svg')
        .attr('width', '1200px')
        .attr('height', '800px')
        .attr('class', 'vizSvg');
    this.barChart(viz);
  };

  radarChart = () => {

  }

  barChart = (selectation) => {
    const viz = selectation;
    const barBackgroundHeight = 25;
    const barHeight = 15;
    const maxBarWeight = 200;
    const actualBarStartXPos = 75;
    const actualBarStartYPos = 20;

    const dataBar = [
      {
        skill: 'ETL',
        amount: 3,
      }, {
        skill: 'Machine Learning',
        amount: 4,
      }, {
        skill: 'Data Mining',
        amount: 5,
      }, {
        skill: 'Data Viz Interact',
        amount: 5,
      }, {
        skill: 'Big Data',
        amount: 3,
      }, {
        skill: 'Cloud Server',
        amount: 1,
      }, {
        skill: 'Database',
        amount: 7,
      }];

    // sort dataBar by amount
    dataBar.sort((x, y) => y.amount - x.amount);

    const allAmount = dataBar.map((i) => i.amount);
    const allAmountLength = allAmount.length;
    // const minAmount = d3.min(allAmount);
    const maxAmount = d3.max(allAmount);
    // create scale functions
    const barScale = d3.scaleLinear()
        .domain([0, maxAmount])
        .range([0, maxBarWeight]);

    const xScale = barScale;
    // define X axis
    const xAxis = d3.axisBottom(xScale)
        .ticks(maxAmount < 11 ? maxAmount : maxAmount / 2);
    // create the whole Bar Chart container
    const vizBarBody = viz.append('g')
        .attr('id', 'vizBarBody')
        .attr('width', '300px')
        .attr('height', '330px');
    // set and transform the start point positation
    const barXPos = 200;
    const barYPos = 200;
    vizBarBody.attr('transform',
        `translate(${barXPos}, ${barYPos})`);
    // create the single bar cotainer
    const barWrapper = vizBarBody.selectAll('g')
        .data(dataBar)
        .enter()
        .append('g')
        .attr('class', 'barWrapper')
        .attr('transform',
              (d, i) => (`translate(${actualBarStartXPos} ,${actualBarStartYPos + barBackgroundHeight * i})`)
        )
        .on('mouseover', () => {
          // console.log(d3.select(this));
            // RadarChart.drawLine(RadarChart.getRadarDataUsingSubcategory(d.skill));
          // d3.select(this)
          //     .select('.barRect')
          //     .transition()
          //     .duration(300)
          //     .style('fill', 'rgb(229,190,157)');
        })
        .on('mouseout', () => {
            // RadarChart.drawLine(allSubcategoryData);
          // d3.select(this)
          //     .select('.barRect')
          //     .transition()
          //     .duration(300)
          //     .style('fill', 'rgb(218, 103, 97)');
        });
    // add background for bar
    barWrapper.append('rect')
        .attr('class', 'background')
        .attr('x', -100)
        .attr('width', 300)
        .attr('height', barBackgroundHeight)
        .style('fill', 'white');
    // add actual bar
    barWrapper.append('rect')
        .attr('class', 'barRect')
        .attr('width', (d) => barScale(d.amount))
        .attr('height', barHeight)
        .style('fill', 'rgb(218, 103, 97)');
    // add bar labels
    barWrapper.append('text')
        .attr('class', 'barLabels')
        .attr('x', -10)
        .attr('y', 11)
        .text((d) => d.skill)
        .style('text-anchor', 'end')
        .style('font-size', '10px')
        .style('font-weight', 300)
        .style('fill', 'rgb(41, 41, 41)')
        .style('font-family', 'Open Sans');

    // create title
    vizBarBody.append('g')
        .append('text')
        .attr('class', 'barTitle')
        .attr('transform', 'translate(175, 5)')
        .text('Quantity - Skills number in each Subcategory')
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .style('font-family', 'Oswald')
        .style('weight', 300)
        .style('fill', '#525252');

      // create the x axis container
    const vizBarAxis = viz.append('svg:g')
        .attr('id', 'vizBarAxis')
        .style('visibility', 'hidden');
    // transform to x axis pos
    const barAxisXPos = barXPos + actualBarStartXPos;
    const barAxisYPos = barYPos + actualBarStartYPos + barBackgroundHeight * allAmountLength;
    vizBarAxis.attr('transform', `translate(${barAxisXPos} ,${barAxisYPos})`);
    // call xAxis
    vizBarAxis.append('g')
        .attr('class', 'xAxis')
        .call(xAxis);
  }

  render() {
    return (
      <div
        style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center' }}
        id={'viz'}
      />
    );
  }
}

export default Viz;
