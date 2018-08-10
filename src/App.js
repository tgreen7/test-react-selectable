import React, { Component } from 'react'
import { SelectableGroup, createSelectable } from 'react-selectable-fast'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    items: [1, 2, 3, 4, 5]
  }
  render() {
    return (
      <div className="App">
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <SelectableGroup
            className="main"
            clickClassName="tick"
            enableDeselect
            duringSelection={this.handleSelecting}
            onSelectionClear={this.handleSelectionClear}
            onSelectionFinish={this.handleSelectionFinish}
            ignoreList={[
              '.not-selectable',
              '.item:nth-child(10)',
              '.item:nth-child(27)'
            ]}
          >
            <svg height={900} width={900}>
              {this.state.items.map((a, i) => {
                return <SomeComponent key={i} index={i} />
              })}
            </svg>
          </SelectableGroup>
        </div>
      </div>
    )
  }
}

let SomeComponent = ({ selectableRef, selected, selecting, index }) => (
  <rect
    ref={selectableRef}
    {...{
      width: 100,
      height: 100,
      x: 100 * index + 20,
      y: 100 * index + 20,
      fill: selected ? 'red' : 'blue',
      strokeWidth: 2,
      stroke: selecting ? 'black' : selected ? 'red' : 'blue'
    }}
  />
)

SomeComponent = createSelectable(SomeComponent)

export default App
