export interface MissingPetType {
  sightings: [
    {
      sightingDate: string;
      location: {
        latitude: number;
        longitude: number;
      };
      description: string;
    },
  ];
  pet: {
    name: string;
    species: string;
    age: number;
    photos: [
      {
        content: string;
      },
    ];
    description: string;
  };
}

export interface CommentsType {
  missingPetId: string;
  awnsersTo: string;
  content: string;
}
