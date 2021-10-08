
import { Group } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
function modelLoader(url: string) {
    return new Promise<Group>((resolve, reject) => {
      loader.load(url, data=> resolve(data.scene), undefined, reject);
    });
}

export default async function load_model(model_name: string) {
    const modelUrl = new URL('../assets/3D_model/' + model_name + '.glb', import.meta.url);
    const model = await modelLoader(modelUrl.href);
    return model;
}