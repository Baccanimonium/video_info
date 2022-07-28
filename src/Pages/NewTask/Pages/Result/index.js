import * as React from 'react';
import PropTypes from 'prop-types';
import {
  GridRow,
  LeftSideGridContainer,
  GridColumn,
  HeaderGrid,
  LeftSideGrid,
  BodyGrid, HeaderCell, Cell
} from './styles'
import {AutoSizer, ScrollSync} from 'react-virtualized'
import scrollbarSize from 'dom-helpers/scrollbarSize';
import Grid from '../../../../component_ocean/Components/Tables/Grid'
import {useMemo} from "react";

const baseData = {
  Year: "2020", Year1: "tretr", Month: "авг-2020", TvCompany: "ДОМАШНИЙ (СЕТЕВОЙ)", TvNet: "ДОМАШНИЙ", "GRP BA": 0.6788
}


const columns = [
  { id: "Year", label: "Year" },
  { id: "Year1", label: "Year1" },
  { id: "Month", label: "Month" },
  { id: "TvCompany", label: "TvCompany" },
  { id: "GRP BA", label: "GRP BA" },
]

for (let i = 0; i < 50; i++) {
  if (i > 4) {
    columns[i] = { id: i, label: i }
    baseData[i] = i
  }
}

const plugins = {
  filterPlugin: {}
}


const Result = () => {

  const value = useMemo(() => {
    const result = new Array(155)
    for (let i = 0; i < result.length; i++) {
      result[i] = { ...baseData, 5: i }
    }
    return result
  }, [])

  return (
    <Grid value={value} id="result" columns={columns} plugins={plugins}/>
  )
}
export default Result
// export default class GridExample extends React.PureComponent {
//   constructor(props, context) {
//     super(props, context);
//
//     this.state = {
//       columnWidth: 125,
//       columnCount: 50,
//       height: 600,
//       overscanColumnCount: 0,
//       overscanRowCount: 5,
//       rowHeight: 40,
//       rowCount: 10000,
//     };
//
//     this._renderBodyCell = this._renderBodyCell.bind(this);
//     this._renderHeaderCell = this._renderHeaderCell.bind(this);
//     this._renderLeftSideCell = this._renderLeftSideCell.bind(this);
//   }
//
//   render() {
//     const {
//       columnCount,
//       columnWidth,
//       height,
//       overscanColumnCount,
//       overscanRowCount,
//       rowHeight,
//       rowCount,
//     } = this.state;
//
//
//     return (
//       <div className="flex-container m-l-5 m-r-5 m-t-20">
//         <ScrollSync>
//           {({ onScroll, scrollLeft, scrollTop }) => (
//             <GridRow>
//               <LeftSideGridContainer
//                 style={{
//                   position: 'absolute',
//                   left: 0,
//                   top: 0,
//                   color: leftColor,
//                   backgroundColor: `rgb(51, 51, 51)`,
//                 }}
//               >
//                 <HeaderGrid
//                   cellRenderer={this._renderLeftHeaderCell}
//                   width={columnWidth}
//                   height={rowHeight}
//                   rowHeight={rowHeight}
//                   columnWidth={columnWidth}
//                   rowCount={1}
//                   columnCount={1}
//                 />
//               </LeftSideGridContainer>
//               <LeftSideGridContainer
//                 style={{
//                   position: 'absolute',
//                   left: 0,
//                   top: rowHeight,
//                   color: leftColor,
//                   backgroundColor: `#BFA764`,
//                 }}
//               >
//                 <LeftSideGrid
//                   overscanColumnCount={overscanColumnCount}
//                   overscanRowCount={overscanRowCount}
//                   cellRenderer={this._renderLeftSideCell}
//                   columnWidth={columnWidth}
//                   columnCount={1}
//                   height={height - scrollbarSize()}
//                   rowHeight={rowHeight}
//                   rowCount={rowCount}
//                   scrollTop={scrollTop}
//                   width={columnWidth}
//                 />
//               </LeftSideGridContainer>
//               <GridColumn>
//                 <AutoSizer disableHeight>
//                   {({width}) => (
//                     <div>
//                       <div style={{
//                         backgroundColor: `rgb(51, 51, 51)`,
//                         color: topColor,
//                         height: rowHeight,
//                         width: width - scrollbarSize()
//                       }}>
//                         <HeaderGrid
//                           columnWidth={columnWidth}
//                           columnCount={columnCount}
//                           height={rowHeight}
//                           overscanColumnCount={overscanColumnCount}
//                           cellRenderer={this._renderHeaderCell}
//                           rowHeight={rowHeight}
//                           rowCount={1}
//                           scrollLeft={scrollLeft}
//                           width={width - scrollbarSize()}
//                         />
//                       </div>
//                       <div style={{backgroundColor: `#545454`, color: middleColor, height, width}}>
//                         <BodyGrid
//                           columnWidth={columnWidth}
//                           columnCount={columnCount}
//                           height={height}
//                           onScroll={onScroll}
//                           overscanColumnCount={overscanColumnCount}
//                           overscanRowCount={overscanRowCount}
//                           cellRenderer={this._renderBodyCell}
//                           rowHeight={rowHeight}
//                           rowCount={rowCount}
//                           width={width}
//                         />
//                       </div>
//                     </div>
//                   )}
//                 </AutoSizer>
//               </GridColumn>
//             </GridRow>
//           )
//           }
//         </ScrollSync>
//       </div>
//     );
//   }
//
//   _renderBodyCell({columnIndex, key, rowIndex, style}) {
//     if (columnIndex < 1) {
//       return;
//     }
//
//     return this._renderLeftSideCell({columnIndex, key, rowIndex, style});
//   }
//
//   _renderHeaderCell({columnIndex, key, rowIndex, style}) {
//     if (columnIndex < 1) {
//       return;
//     }
//
//     return this._renderLeftHeaderCell({columnIndex, key, rowIndex, style});
//   }
//
//   _renderLeftHeaderCell({columnIndex, key, style}) {
//     return (
//       <HeaderCell key={key} style={style}>
//         {headers[columnIndex].id}
//       </HeaderCell>
//     );
//   }
//
//   _renderLeftSideCell({columnIndex, key, rowIndex, style}) {
//
//     return (
//       <Cell key={key} style={style}>
//         {columnIndex < 5 ? "" : rowIndex}{baseData[headers[columnIndex].id]}
//       </Cell>
//     );
//   }
// }
