//////////////////////////////////////////////////////////////////////////////
/**
 * @module geo.d3
 */
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
/**
 * D3 specific subclass of object which adds an id property for d3 selections
 * on groups of objects by class id.
 */
//////////////////////////////////////////////////////////////////////////////

gd3.object = function (arg) {
  'use strict';
  // this is used to extend other geojs classes, so only generate
  // a new object when that is not the case... like if this === window
  if (!(this instanceof geo.object)) {
    return new gd3.object(arg);
  }

  var m_id = 'd3-' + gd3.uniqueID(),
      m_this = this;

  this._d3id = function () {
    return m_id;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
  *  Returns a d3 selection for the feature elements
  */
  ////////////////////////////////////////////////////////////////////////////
  this.select = function () {
    return m_this.renderer().select(m_this._d3id());
  };

  geo.sceneObject.call(this);
  return this;
};

inherit(gd3.object, geo.sceneObject);
