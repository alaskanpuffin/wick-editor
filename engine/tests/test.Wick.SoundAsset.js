describe('Wick.SoundAsset', function() {
    var TEST_SOUND_SRC_WAV = 'data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=';
    var TEST_SOUND_SRC_MP3 = 'data:audio/mp3;base64,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VVVVVVVVVVVV//sQZMyP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk7o/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk4LjJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTguMlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUFQRVRBR0VY0AcAAFAAAAACAAAAAAAAoAAAAAAAAAAADgAAAAAAAABBcnRpc3QAU291bmRCaWJsZS5jb20FAAAAAAAAAEdlbnJlAE90aGVyQVBFVEFHRVjQBwAAUAAAAAIAAAAAAACAAAAAAAAAAABUQUcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABTb3VuZEJpYmxlLmNvbQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA==';

    describe('#constructor', function () {
        it('should instantiate correctly', function () {
            var sound = new Wick.SoundAsset({
                filename:'test.wav',
                src: TEST_SOUND_SRC_WAV
            });
            expect(sound.classname).to.equal('SoundAsset');
        });
    });
/*
    describe('#serialize', function () {
        it('should serialize correctly', function() {
            var asset = new Wick.SoundAsset('test.wav', TEST_SOUND_SRC_WAV);
            var data = asset.serialize();

            expect(data.classname).to.equal('SoundAsset');
        });
    });

    describe('#_deserialize', function () {
        it('should deserialize correctly', function() {
            var data = {
                classname: 'SoundAsset',
                src: TEST_SOUND_SRC_WAV,
            };
            var asset = Wick.SoundAsset.deserialize(data);

            expect(asset instanceof Wick.SoundAsset).to.equal(true);
        });
    });
*/
    describe('#removeAllInstances', function () {
        it('should delete all instances of the asset in the project', function () {
            var project = new Wick.Project();
            var asset1 = new Wick.SoundAsset({
                filename: 'test.wav',
                src: TEST_SOUND_SRC_WAV
            });
            var asset2 = new Wick.SoundAsset({
                filename: 'test.mp3',
                src: TEST_SOUND_SRC_MP3,
            });
            project.addAsset(asset1);
            project.addAsset(asset2);

            project.activeLayer.addFrame(new Wick.Frame(2));
            project.activeLayer.addFrame(new Wick.Frame(3));

            project.activeLayer.frames[0].sound = asset1;
            project.activeLayer.frames[1].sound = asset1;
            project.activeLayer.frames[2].sound = asset2;

            project.removeAsset(asset1);
            expect(project.activeLayer.frames[0].sound).to.equal(null);
            expect(project.activeLayer.frames[1].sound).to.equal(null);
            expect(project.activeLayer.frames[2].sound).to.equal(asset2);
        });
    });
});
