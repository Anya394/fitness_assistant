'use client';

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { theme } from '@/app/Theme';
import { WeightData, WeightProgressChartProps } from '@/app/types';

const WeightProgressChart: React.FC<WeightProgressChartProps> = React.memo(
  ({
    data,
    width = 620,
    height = 320,
    margin = { top: 20, right: 30, bottom: 60, left: 60 },
  }) => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
      if (!data.length || !svgRef.current) return;

      // Очистка
      d3.select(svgRef.current).selectAll('*').remove();

      // Размеры
      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height - margin.top - margin.bottom;

      // Создание SVG с фоном
      const svg = d3
        .select(svgRef.current)
        .attr('width', width)
        .attr('height', height)
        .style('background', theme.background)
        .style('border-radius', '8px')
        .style('box-shadow', '0 4px 12px rgba(0,0,0,0.1)')
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      // Градиент для линии
      const gradient = svg
        .append('defs')
        .append('linearGradient')
        .attr('id', 'line-gradient')
        .attr('gradientUnits', 'userSpaceOnUse')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', 0)
        .attr('y2', innerHeight);

      gradient
        .append('stop')
        .attr('offset', '0%')
        .attr('stop-color', theme.primary);
      gradient
        .append('stop')
        .attr('offset', '100%')
        .attr('stop-color', theme.secondary);

      // Сортировка по дате
      const sortedData = [...data].sort(
        (a, b) => a.date.getTime() - b.date.getTime(),
      );

      // Шкалы
      const xScale = d3
        .scaleTime()
        .domain(d3.extent(sortedData, (d) => d.date) as [Date, Date])
        .range([0, innerWidth])
        .nice();

      const yScale = d3
        .scaleLinear()
        .domain([
          d3.min(sortedData, (d) => d.weight)! * 0.98,
          d3.max(sortedData, (d) => d.weight)! * 1.02,
        ])
        .range([innerHeight, 0])
        .nice();

      // Сетка с тонкими линиями
      svg
        .append('g')
        .attr('class', 'grid')
        .call(
          d3
            .axisLeft(yScale)
            .tickSize(-innerWidth)
            .tickFormat(() => ''),
        )
        .selectAll('.tick line')
        .attr('stroke', theme.grid)
        .attr('stroke-opacity', 0.5);
      //.attr('stroke-dasharray', '2,2');

      // Оси с улучшенным стилем
      svg
        .append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(d3.axisBottom(xScale).tickFormat(d3.timeFormat('%d %b')))
        .style('color', theme.text)
        .selectAll('text')
        .style('text-anchor', 'end')
        .attr('dx', '-.8em')
        .attr('dy', '.15em')
        .attr('transform', 'rotate(-45)');

      svg
        .append('g')
        .attr('class', 'y-axis')
        .call(d3.axisLeft(yScale).tickFormat((d) => `${d}`))
        .style('color', theme.text)
        .selectAll('text')
        .style('font-size', '12px')
        .style('margin', '12px');

      // Подписи осей с улучшенным стилем
      svg
        .append('text')
        .attr('class', 'axis-label')
        .attr('x', innerWidth / 2)
        .attr('y', innerHeight + margin.bottom - 9)
        .attr('text-anchor', 'middle')
        .style('font-size', '12px')
        .style('fill', theme.text)
        .style('font-weight', 'bold')
        .text('Дата измерения');

      svg
        .append('text')
        .attr('class', 'axis-label')
        .attr('transform', 'rotate(-90)')
        .attr('x', -innerHeight / 2)
        .attr('y', -margin.left + 18)
        .attr('text-anchor', 'middle')
        .style('font-size', '12px')
        .style('fill', theme.text)
        .style('font-weight', 'bold')
        .text('Вес (кг)');

      // Средняя линия
      const avgWeight = d3.mean(data, (d) => d.weight) || 0;

      svg
        .append('line')
        .attr('x1', 0)
        .attr('y1', yScale(avgWeight))
        .attr('x2', innerWidth)
        .attr('y2', yScale(avgWeight))
        .attr('stroke', theme.secondary)
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '5,5');

      // Линия с градиентом
      const line = d3
        .line<WeightData>()
        .x((d) => xScale(d.date))
        .y((d) => yScale(d.weight))
        .curve(d3.curveCatmullRom.alpha(0.5));

      svg
        .append('path')
        .datum(sortedData)
        .attr('fill', 'none')
        .attr('stroke', 'url(#line-gradient)')
        .attr('stroke-width', 4)
        .attr('stroke-linecap', 'round')
        .attr('d', line);

      // Аннотации средней линии
      svg
        .append('text')
        .attr('x', innerWidth - 10)
        .attr('y', yScale(avgWeight) - 10)
        .attr('text-anchor', 'end')
        .style('font-size', '11px')
        .style('fill', theme.secondary)
        .text(`Среднее: ${avgWeight.toFixed(1)} кг`);

      // Область под кривой
      const area = d3
        .area<WeightData>()
        .x((d) => xScale(d.date))
        .y0(innerHeight)
        .y1((d) => yScale(d.weight))
        .curve(d3.curveCatmullRom.alpha(0.5));

      svg
        .append('path')
        .datum(sortedData)
        .attr('fill', 'url(#line-gradient)')
        .attr('fill-opacity', 0.1)
        .attr('d', area);

      // Точки данных
      svg
        .selectAll('.dot')
        .data(sortedData)
        .enter()
        .append('circle')
        .attr('class', 'dot')
        .attr('cx', (d) => xScale(d.date))
        .attr('cy', (d) => yScale(d.weight))
        .attr('r', 6)
        .attr('fill', theme.background)
        .attr('stroke', theme.primary)
        .attr('stroke-width', 2)
        .on('mouseover', (event, d) => {
          // Красивые tooltip'ы
          const tooltip = svg
            .append('g')
            .attr('class', 'tooltip')
            .attr(
              'transform',
              `translate(${xScale(d.date)},${yScale(d.weight)})`,
            );

          tooltip
            .append('rect')
            .attr('x', -40)
            .attr('y', -40)
            .attr('rx', 4)
            .attr('width', 80)
            .attr('height', 35)
            .attr('fill', theme.tooltipBg)
            .attr('stroke', theme.primary)
            .attr('stroke-width', 1)
            .attr('filter', 'url(#drop-shadow)');

          tooltip
            .append('text')
            .attr('x', 0)
            .attr('y', -25)
            .attr('text-anchor', 'middle')
            .attr('font-size', '12px')
            .attr('font-weight', 'bold')
            .attr('fill', theme.primary)
            .text(`${d.weight.toFixed(1)} кг`);

          tooltip
            .append('text')
            .attr('x', 0)
            .attr('y', -10)
            .attr('text-anchor', 'middle')
            .attr('font-size', '10px')
            .attr('fill', theme.text)
            .text(d3.timeFormat('%d %b %Y')(d.date));
        })
        .on('mouseout', () => {
          svg.selectAll('.tooltip').remove();
        });

      // Эффект тени для tooltip'ов
      const defs = svg.append('defs');
      const filter = defs
        .append('filter')
        .attr('id', 'drop-shadow')
        .attr('height', '130%');

      filter
        .append('feGaussianBlur')
        .attr('in', 'SourceAlpha')
        .attr('stdDeviation', 2)
        .attr('result', 'blur');
      filter
        .append('feOffset')
        .attr('in', 'blur')
        .attr('dx', 1)
        .attr('dy', 1)
        .attr('result', 'offsetBlur');

      const feMerge = filter.append('feMerge');
      feMerge.append('feMergeNode').attr('in', 'offsetBlur');
      feMerge.append('feMergeNode').attr('in', 'SourceGraphic');
    }, [data, width, height, margin]);

    return (
      <div>
        <svg ref={svgRef} />
      </div>
    );
  },
);

WeightProgressChart.displayName = 'WeightProgressChart';
export default WeightProgressChart;
