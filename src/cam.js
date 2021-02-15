const loadCamera = async () => {
    const cam = await navigator.mediaDevices.getUserMedia(
        {
            video: {
                facingMode: { exact: "environment" },
                height: 320,
                width: 320
            }
        }
    );
    console.log(cam);
    return cam;
};


export { loadCamera }