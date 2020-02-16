JSC3D.Viewer.prototype.getRotationAngles = function() {
    var angles = [
      Math.atan2(this.rotMatrix.m21, this.rotMatrix.m22) * 180 / Math.PI, 
      Math.asin(-this.rotMatrix.m20) * 180 / Math.PI, 
      Math.atan2(this.rotMatrix.m10, this.rotMatrix.m00) * 180 / Math.PI
    ];
    if (angles[0] < 0) angles[0] += 360;
    if (angles[1] < 0) angles[1] += 360;
    if (angles[2] < 0) angles[2] += 360;
    return angles;
};
var viewer = new JSC3D.Viewer(document.getElementById('cv'));
viewer.setParameter('SceneUrl', '/nasarmc/robotasm.stl');
viewer.setParameter('ModelColor', '#CAA618');
viewer.setParameter('BackgroundColor1', '#E5D7BA');
viewer.setParameter('BackgroundColor2', '#383840');
viewer.setParameter('RenderMode', 'flat');
viewer.setParameter('Definition', 'high');
viewer.setParameter('Background', 'off');
viewer.setParameter('InitRotationX', '20');
viewer.setParameter('InitRotationY', '60');
viewer.init();
viewer.update();
var rotateTimer = null;
var spinX = 0;
var spinY = 1;
var spinZ = 0;

function rotate(x, y, z) {
    var rotateStep = 10;
    var spinStep = 1;
    viewer.rotate(x * rotateStep, y * rotateStep, z * rotateStep);
    var angles = viewer.getRotationAngles();
    console.log("rotation " + angles);
    viewer.update();
    spinX = x * spinStep;
    spinY = y * spinStep;
    spinZ = z * spinStep;
}

function stopSpin() {
    if (rotateTimer != null) {
        clearInterval(rotateTimer);
        rotateTimer = null;
    }
}

function spinChange() {
    stopSpin();
    if (document.getElementById("spinCheckbox").checked) {
        if (spinX === 0 && spinY === 0 && spinZ === 0) spinY = 1;
        rotateTimer = setInterval(function() {
            viewer.rotate(spinX, spinY, spinZ);
            viewer.update();
        }, 40);
    }
}
spinChange();