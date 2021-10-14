
import { Group } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


const loader = new GLTFLoader();
function modelLoader(url: string) {
    return new Promise<Group>((resolve, reject) => {
      loader.load(url, data=> resolve(data.scene), undefined, reject);
    });
}

export default async function load_model(model_name: string) {
    const modelUrl = './3D_model/' + model_name + '.glb';
    const model = await modelLoader(modelUrl);
    // local animate test
    await new Promise((resolve)=>setTimeout(()=>{ resolve('load ok'); }, 5000));
    return model;
}