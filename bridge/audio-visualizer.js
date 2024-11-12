class VisualizerProcessor extends AudioWorkletProcessor {
    constructor() {
        super();
        this.volume = 0;
        this.updateIntervalInMS = 100;
        this.lastUpdateTime = Date.now();
    }

    process(inputs, _outputs, _parameters) {
        // let now = Date.now();
        // if (now < this.lastUpdateTime + this.updateIntervalInMS) {return true;}
        // this.lastUpdateTime = now;
        //const input = inputs[0];

        this.port.postMessage({inputs});
        return true;
    }
}

registerProcessor('processor', VisualizerProcessor);
