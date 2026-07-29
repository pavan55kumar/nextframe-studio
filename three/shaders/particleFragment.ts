export const particleFragmentShader = /* glsl */ `
  varying vec3 vColor;

  void main() {
    vec2 uv = gl_PointCoord - vec2(0.5);
    float dist = length(uv);
    float alpha = smoothstep(0.5, 0.0, dist);
    alpha *= alpha; // softer glow falloff

    if (alpha < 0.01) discard;
    gl_FragColor = vec4(vColor, alpha);
  }
`;