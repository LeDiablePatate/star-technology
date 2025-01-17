
ServerEvents.recipes(event => {

    event.recipes.gtceu.extractor('echo_fluid')
        .itemInputs('minecraft:echo_shard')
        .outputFluids('gtceu:echo 144')
        .duration(12000)
        .EUt(28700);

    event.recipes.gtceu.fluid_solidifier('raw_void_ingot')
        .itemInputs('gtceu:neutronium_ingot')
        .inputFluids('gtceu:echo 144')
        .itemOutputs('gtceu:raw_void_ingot')
        .duration(6000)
        .EUt(28700);

    event.remove({output: 'gtceu:void_hot_ingot'});

    event.recipes.gtceu.heat_chamber('crude_to_void_ingot')
        .itemInputs('gtceu:raw_void_ingot')
        .itemOutputs('gtceu:void_hot_ingot')
        .blastFurnaceTemp(10799)
        .duration(16000)
        .EUt(28700);

});