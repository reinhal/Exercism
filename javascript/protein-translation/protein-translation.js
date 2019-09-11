//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna) => {

  const aminoAcids = { 
    'AUG': 'Methionine',
    'UUU': 'Phenylalanine',
    'UUC': 'Phenylalanine',
    'UUA': 'Leucine',
    'UUG': 'Leucine',
    'UCU': 'Serine',
    'UCC': 'Serine',
    'UCA': 'Serine',
    'UCG': 'Serine',
    'UAU': 'Tyrosine',
    'UAC': 'Tyrosine',
    'UGU': 'Cysteine',
    'UGC': 'Cysteine',
    'UGG': 'Tryptophan',
    'UAA': 'STOP',
    'UAG': 'STOP',
    'UGA': 'STOP', 
  };
    
  let proteinList = [];

  if (!rna) {
    return proteinList;
  }

  for (let i = 0; i < rna.length; i = i + 3) {
    let codon = rna.substring(i, i + 3);
    let protein = aminoAcids[codon];

    switch (protein) {
      case undefined:
        throw 'Invalid codon';
      case 'STOP':
        return proteinList;
      default:
        proteinList.push(protein);
    }
  }
        
  return proteinList;
};