class VisualizerProcessor extends AudioWorkletProcessor {
    constructor() {
        super();
        this.id = 0;
    }

    process(inputs, _outputs, _parameters) {
        const input = inputs[0];
        let max = 0;
        if (!input[0]) {debugger; return false}
        for (let i = 0; i < input[0].length; i++) {
            max = Math.abs(input[0][i]) > max ? Math.abs(input[0][i]) : max;
        }
        
        this.port.postMessage({id: this.id, input});
        this.id++;
        return true;
    }
}

registerProcessor('processor', VisualizerProcessor);
