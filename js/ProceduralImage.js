function ProceduralImage (seed, ctx, network) {
	this.seed = seed;
	this.ctx = ctx;
	this.neuralNet = new NeuralNet({
		inputNodes: 1,
		outputNodes: 49,
		hiddenLayers: 2,
		nodesPerLayer: 60
	}, network);
}

ProceduralImage.prototype.paintImage = function paintImage (ctx) {
	ctx = ctx || this.ctx;
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	var output = this.neuralNet.runNetwork([this.seed]);
	for (var o = 0; o < output.length; o += 7) {
		ctx.beginPath();
		ctx.rect(ctx.canvas.width * output[o + 1], ctx.canvas.height * output[o + 2], ctx.canvas.width * output[o + 3], ctx.canvas.height * output[o + 4]);
		ctx.fillStyle = "rgb(" + Math.floor(output[o + 5] * 255) + ", " + Math.floor(output[o + 6] * 255) + ", " + Math.floor(output[o + 0] * 255) + ")";
		ctx.fill();
	}
};