import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'expo-router';

import { AppHeader } from '@/components/AppHeader';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { RequireAuth } from '@/features/auth/RequireAuth';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { typography } from '@/theme/typography';
import type { AppLanguage } from '@/types/app';

import { getLegalDocument, type LegalDocumentKey } from './legalContent';

type LegalDocumentScreenProps = {
  documentKey: LegalDocumentKey;
};

export function LegalDocumentScreen({ documentKey }: LegalDocumentScreenProps) {
  const router = useRouter();
  const { i18n, t } = useTranslation();
  const language: AppLanguage = i18n.resolvedLanguage === 'en' ? 'en' : 'ja';
  const document = getLegalDocument(documentKey, language);

  return (
    <RequireAuth>
      <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content}>
          <AppHeader
            eyebrow={t('legal')}
            title={document.title}
            subtitle={t('legalEffectiveDate', { value: document.effectiveDate })}
          />

          <Card style={styles.introduction}>
            {document.introduction.map((paragraph) => (
              <Text key={paragraph} style={styles.paragraph}>
                {paragraph}
              </Text>
            ))}
          </Card>

          {document.sections.map((section) => (
            <Card key={section.title} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <View style={styles.sectionBody}>
                {section.body.map((paragraph) => (
                  <Text key={paragraph} style={styles.paragraph}>
                    {paragraph}
                  </Text>
                ))}
              </View>
            </Card>
          ))}

          <Button onPress={() => router.push('/contact')} variant="secondary">
            {t('contact')}
          </Button>
        </ScrollView>
      </SafeAreaView>
    </RequireAuth>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    gap: spacing.lg,
    padding: spacing.xl,
    paddingBottom: spacing.xxl,
  },
  introduction: {
    gap: spacing.md,
  },
  section: {
    gap: spacing.md,
  },
  sectionBody: {
    gap: spacing.md,
  },
  sectionTitle: {
    color: colors.primaryDark,
    fontSize: typography.body,
    fontWeight: '900',
    lineHeight: 24,
  },
  paragraph: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 24,
  },
});
