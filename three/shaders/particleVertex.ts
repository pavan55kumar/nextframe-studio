export const particleVertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uMotion; // 0 = reduced motion (frozen), 1 = full motion

  attribute float aSize;
  attribute float aSpeed;
  attribute float aOffset;

  varying vec3 vColor;

  void main() {
    vColor = color;

    vec3 pos = position;
    float t = uTime * aSpeed * uMotion;

    pos.x += sin(t + aOffset) * 0.6;
    pos.y += cos(t * 0.8 + aOffset) * 0.4;
    pos.z += sin(t * 0.5 + aOffset * 2.0) * 0.3;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

    gl_PointSize = aSize * uPixelRatio * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;