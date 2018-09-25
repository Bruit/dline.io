class MixShadersUniform {
  static uniforms() {
    return {
      'uTextureBackTest0': {
        type: 't',
        value: [],
        typeGLSL: 'sampler2D'
      },
      'uTextureBackTest1': {
        type: 't',
        value: [],
        typeGLSL: 'sampler2D'
      },
      'uOpacity0': {
        type: 'f',
        value: 1.0,
        typeGLSL: 'float'
      },
      'uOpacity1': {
        type: 'f',
        value: 1.0,
        typeGLSL: 'float'
      },
      'uType0': {
        type: 'i',
        value: 0,
        typeGLSL: 'int'
      },
      'uType1': {
        type: 'i',
        value: 1,
        typeGLSL: 'int'
      },
      'uTrackMouse': {
        type: 'i',
        value: 0,
        typeGLSL: 'int'
      },
      'uMouse': {
        type: 'v2',
        value: new THREE.Vector2(),
        typeGLSL: 'vec2'
      },
      'uMixMode': {
        type: 'i',
        value: 0,
        typeGLSL: 'int'
      },
      'uShift': {
        type: 'v2',
        value: new THREE.Vector2(),
        typeGLSL: 'vec2'
      },
      'uCanvasWidth': {
        type: 'f',
        value: 0.,
        typeGLSL: 'float'
      },
      'uCanvasHeight': {
        type: 'f',
        value: 0.,
        typeGLSL: 'float'
      }
    };
  }

}