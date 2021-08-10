import { getImagen } from '../../base-pruebas/11-async-await';

describe('Haciendo pruebas asíncronas con async-await.', () => {
    
    test('El método getImagen debe retornar el url de una imagen.', async () => {
        
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);

    });
    
})
