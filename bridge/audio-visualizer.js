class VisualizerProcessor extends AudioWorkletProcessor {
    constructor() {
        super();
        this.lastUpdateTime = Date.now();
        const buffers = [];
    }

    process(inputs, _outputs, _parameters) {
        const input = inputs[0];
        this.port.postMessage({input});
        return true;
    }
}

registerProcessor('processor', VisualizerProcessor);
