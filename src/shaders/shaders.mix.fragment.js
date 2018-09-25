class MixShaderFragment{constructor(uniforms){this._uniforms=uniforms;this._functions={};this._main=""}functions(){if(""===this._main){this.main()}let content="";for(let property in this._functions){content+=this._functions[property]+"\n"}return content}uniforms(){let content="";for(let property in this._uniforms){let uniform=this._uniforms[property];content+=`uniform ${uniform.typeGLSL} ${property}`;if(uniform&&uniform.length){content+=`[${uniform.length}]`}content+=";\n"}return content}main(){this._main=`
void main(void) {

    vec2 texc = vec2(((vProjectedCoords.x / vProjectedCoords.w) + 1.0 ) / 2.0,
                    ((vProjectedCoords.y / vProjectedCoords.w) + 1.0 ) / 2.0 );
  
  //The back position is the world space position stored in the texture.
  vec4 baseColor0 = texture2D(uTextureBackTest0, texc);
  vec4 baseColor1 = texture2D(uTextureBackTest1, texc);
  
  if( uTrackMouse == 1 ){

    if (uMixMode == 0) 
    {
        if (vProjectedCoords.x > uMouse.x)
        {
            gl_FragColor = baseColor0;
        }   
        else
        {
            gl_FragColor = mix( baseColor0, baseColor1, uOpacity1 );
        }
    }
    else if (uMixMode == 1)
    {
        if (vProjectedCoords.y > uMouse.y)
        {
            gl_FragColor = baseColor0;
        }   
        else
        {
            gl_FragColor = mix( baseColor0, baseColor1, uOpacity1 );
        }
    }
    else // 2
    {
        if ( (vProjectedCoords.x > uMouse.x && vProjectedCoords.y > uMouse.y) 
        || (vProjectedCoords.x < uMouse.x && vProjectedCoords.y < uMouse.y) )
        {
            gl_FragColor = baseColor0;
        }   
        else
        {
            gl_FragColor = mix( baseColor0, baseColor1, uOpacity1 );
        }
    }
  }
  else{

    if( uType1 == 0 ){

      //merge an image into
      gl_FragColor = mix( baseColor0, baseColor1, uOpacity1 );

    }
    else{

      float opacity = baseColor1.a;
      gl_FragColor = mix( baseColor0, baseColor1, opacity * uOpacity1 );

    }

  }

  return;
}
   `}compute(){return`
// uniforms
${this.uniforms()}

// varying (should fetch it from vertex directly)
// varying vec4      vPos;
varying vec4      vProjectedCoords;

// tailored functions
${this.functions()}

// main loop
${this._main}
      `}}