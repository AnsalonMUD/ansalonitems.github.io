'use strict'

import React from 'react'
import moment from 'moment'
import GenericMetadataComponent from './generic-item-metadata-component.js'

export default React.createClass({
  displayName: 'ArmorComponent',

  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render() {
    let {...item} = this.props.item
    let effects = item.effects
    let hit = 0
    let dam = 0
    let newEffects = []
    item.effects = newEffects

    for(const effect of effects) {
      for(const key in effect) {
        if(key === 'hit roll') {
          hit = effect[key]
        } else if(key === 'damage roll') {
          dam = effect[key]
        } else {
          let obj = {}
          obj[key] = effect[key]
          newEffects.push(obj)
        }
      }
    }

    return (
      <GenericMetadataComponent item={item}>
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Slot</th>
            <th>Level</th>
            <th>Hit</th>
            <th>Dam</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{this.props.item.name}</td>
            <td>
              <a href={`/items/${this.props.item.slot}`}>{this.props.item.slot}</a>
            </td>
            <td>{this.props.item.level}</td>
            <td>{hit}</td>
            <td>{dam}</td>
          </tr>
          </tbody>
        </table>
      </GenericMetadataComponent>
    )
  }
})
