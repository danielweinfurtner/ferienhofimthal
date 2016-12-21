// Created by iWeb 3.0 local-build-20160207

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:1,offset:new IWPoint(0.0000,-0.0000),color:'#000000',opacity:0.230000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Kontakt_files/KontaktMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();IMpreload('Kontakt_files','shapeimage_2','0');applyEffects()}
function onPageUnload()
{Widget.onunload();}
