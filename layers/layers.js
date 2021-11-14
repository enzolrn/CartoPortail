var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Quadrillage_1km_Oise_1 = new ol.format.GeoJSON();
var features_Quadrillage_1km_Oise_1 = format_Quadrillage_1km_Oise_1.readFeatures(json_Quadrillage_1km_Oise_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quadrillage_1km_Oise_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quadrillage_1km_Oise_1.addFeatures(features_Quadrillage_1km_Oise_1);
var lyr_Quadrillage_1km_Oise_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Quadrillage_1km_Oise_1, 
                style: style_Quadrillage_1km_Oise_1,
                interactive: true,
                title: '<img src="styles/legend/Quadrillage_1km_Oise_1.png" /> Quadrillage_1km_Oise'
            });
var format_Intersection_2 = new ol.format.GeoJSON();
var features_Intersection_2 = format_Intersection_2.readFeatures(json_Intersection_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intersection_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intersection_2.addFeatures(features_Intersection_2);
var lyr_Intersection_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Intersection_2, 
                style: style_Intersection_2,
                interactive: true,
                title: '<img src="styles/legend/Intersection_2.png" /> Intersection'
            });
var format_Parcelles_Agricoles_3 = new ol.format.GeoJSON();
var features_Parcelles_Agricoles_3 = format_Parcelles_Agricoles_3.readFeatures(json_Parcelles_Agricoles_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelles_Agricoles_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelles_Agricoles_3.addFeatures(features_Parcelles_Agricoles_3);
var lyr_Parcelles_Agricoles_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcelles_Agricoles_3, 
                style: style_Parcelles_Agricoles_3,
                interactive: true,
                title: '<img src="styles/legend/Parcelles_Agricoles_3.png" /> Parcelles_Agricoles'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Quadrillage_1km_Oise_1.setVisible(true);lyr_Intersection_2.setVisible(true);lyr_Parcelles_Agricoles_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Quadrillage_1km_Oise_1,lyr_Intersection_2,lyr_Parcelles_Agricoles_3];
lyr_Quadrillage_1km_Oise_1.set('fieldAliases', {'Num_Quadri': 'Num_Quadri', 'stat_categories_num_quadri': 'stat_categories_num_quadri', 'stat_categories_count': 'stat_categories_count', 'stat_categories_sum': 'stat_categories_sum', });
lyr_Intersection_2.set('fieldAliases', {'Num_Quadri': 'Num_Quadri', 'code_90': 'code_90', 'surface_ha': 'surface_ha', });
lyr_Parcelles_Agricoles_3.set('fieldAliases', {'code_90': 'code_90', });
lyr_Quadrillage_1km_Oise_1.set('fieldImages', {'Num_Quadri': 'TextEdit', 'stat_categories_num_quadri': 'TextEdit', 'stat_categories_count': 'Range', 'stat_categories_sum': 'TextEdit', });
lyr_Intersection_2.set('fieldImages', {'Num_Quadri': '', 'code_90': '', 'surface_ha': '', });
lyr_Parcelles_Agricoles_3.set('fieldImages', {'code_90': '', });
lyr_Quadrillage_1km_Oise_1.set('fieldLabels', {'Num_Quadri': 'no label', 'stat_categories_num_quadri': 'no label', 'stat_categories_count': 'no label', 'stat_categories_sum': 'no label', });
lyr_Intersection_2.set('fieldLabels', {'Num_Quadri': 'no label', 'code_90': 'no label', 'surface_ha': 'no label', });
lyr_Parcelles_Agricoles_3.set('fieldLabels', {'code_90': 'no label', });
lyr_Parcelles_Agricoles_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});